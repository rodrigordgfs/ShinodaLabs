import Image from "next/image";

export default function Background() {
  return (
    <div className="w-full h-[400px] bg-hero shadow-md object-cover bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
    </div>
  );
}
