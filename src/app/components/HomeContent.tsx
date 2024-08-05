"use client";

import { ReactTyped } from "react-typed";

export default function HomeContent() {
  return (
    <main className="flex-1 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-center font-bold text-6xl">Rodrigo Shinoda</h1>
      <p className="text-center font-medium text-3xl">
        Eu sou {""}
        <ReactTyped
          strings={["Desenvolvedor Fullstack", "Web Designer", "UI/UX"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </p>
    </main>
  );
}
