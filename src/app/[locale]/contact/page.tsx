import Header from "@/components/Header";
import type { Metadata } from "next";
import ContactMetadata from "./meta";

export const metadata: Metadata = ContactMetadata;

export default function ContactPage() {
  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-16 relative py-10">
      <Header title="Contato" description="Minhas redes sociais" />
    </div>
  );
}
