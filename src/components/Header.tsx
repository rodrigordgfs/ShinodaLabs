"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header({ title, description }: HeaderProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col max-w-6xl w-full mx-auto px-20">
      <X
        size={30}
        onClick={() => router.back()}
        className="fixed top-4 right-4 text-zinc-400 hover:text-lime-400 transition-all cursor-pointer"
      />
      <header className="flex flex-col items-center justify-center ">
        <p className="text-base text-zinc-400 font-normal text-center">{description}</p>
        <h1 className="font-black text-5xl text-zinc-100 mb-10 mt-8 text-center">{title}</h1>
        <div className="flex items-center justify-center mt-3">
          <span className="w-24 h-1 bg-lime-400"></span>
        </div>
      </header>
    </div>
  );
}
