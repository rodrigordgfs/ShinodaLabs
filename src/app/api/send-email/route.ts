import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import resend from "@/libs/resend";
import { applyCors } from "../middleware/cors";

const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email" }),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// POST: Send a new email
export async function POST(req: NextRequest) {
  const res = NextResponse.next();
  await applyCors(req, res, () => {});

  try {
    const body = await req.json();
    const parsedBody = emailSchema.parse(body);
    const { email, message, name, subject } = parsedBody;

    const { data, error } = await resend.emails.send({
      from: 'Shinoda Labs | Web Designer <contato@shinodalabs.xyz>',
      to: [email],
      subject,
      html: `Nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`,
    });

    if (error) {
      return handleError(error, "Failed to send email");
    }

    console.log("Email sent", data);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return handleError(error, "Failed to send email");
  }
}
