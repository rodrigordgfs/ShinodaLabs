"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailService from "@/services/email";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { z } from "zod";
import { LoaderIcon } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export default function FormEmail() {
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path.length) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setLoading(false);
        setErrors(fieldErrors);
        return;
      }
    }

    try {
      await emailService.post(formData);
      toast.success(t("email_sent"));
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
      setErrors({});
    } catch (error) {
      setLoading(false);
      toast.error(error as String);
    }
  };

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-7">
        <input
          type="text"
          name="name"
          placeholder={t("name")}
          value={formData.name}
          disabled={loading}
          onChange={handleChange}
          className={`w-full p-3 bg-zinc-800 text-zinc-400 flex-1 outline-none border-2 focus:border-b-lime-400 transition-all ${
            errors.name
              ? "border-red-500 focus:border-b-red-500"
              : "border-zinc-800"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder={t("email")}
          value={formData.email}
          disabled={loading}
          onChange={handleChange}
          className={`w-full p-3 bg-zinc-800 text-zinc-400 flex-1 outline-none border-2 focus:border-b-lime-400 transition-all ${
            errors.email
              ? "border-red-500 focus:border-b-red-500"
              : "border-zinc-800"
          }`}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder={t("subject")}
        value={formData.subject}
        disabled={loading}
        onChange={handleChange}
        className={`w-full p-3 bg-zinc-800 text-zinc-400 flex-1 outline-none border-2 focus:border-b-lime-400 transition-all ${
          errors.subject
            ? "border-red-500 focus:border-b-red-500"
            : "border-zinc-800"
        }`}
      />
      <textarea
        name="message"
        placeholder={t("message")}
        value={formData.message}
        disabled={loading}
        onChange={handleChange}
        className={`w-full p-3 bg-zinc-800 text-zinc-400 flex-1 outline-none border-2 focus:border-b-lime-400 transition-all ${
          errors.message
            ? "border-red-500 focus:border-b-red-500"
            : "border-zinc-800"
        }`}
      />
      <button
        type="submit"
        className="flex flex-row items-center justify-center bg-lime-400 text-zinc-900 px-4 py-3 hover:bg-lime-500 transition-all"
      >
        {loading ? <LoaderIcon className="animate-spin" /> : t("send_message")}
      </button>
    </form>
  );
}
