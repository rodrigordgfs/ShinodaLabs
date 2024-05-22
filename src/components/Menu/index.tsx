import { AlignJustifyIcon } from "lucide-react";

export default function Menu() {
  return (
    <header className="w-full absolute left-0 right-0 top-0 flex flex-row justify-between px-4 py-5">
      <div className="w-10 h-10 flex rounded-full bg-orange-500 text-white items-center justify-center hover:bg-orange-400 focus:bg-orange-600 transition-all cursor-pointer shadow">
        RS
      </div>
      <div className="w-10 h-10 flex rounded-full bg-zinc-500 text-white items-center justify-center hover:bg-zinc-400 focus:bg-zinc-600 transition-all cursor-pointer shadow">
        <AlignJustifyIcon size={24} className="text-white" />
      </div>
    </header>
  );
}
