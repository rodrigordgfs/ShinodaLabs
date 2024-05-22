import { Clock3 } from "lucide-react";
import type { Project } from "../FeedProjects";
import useFormattedDate from "@/hooks/useFormattedDate";
import Image from "next/image";

export default function FeedProjectItem({
  date,
  title,
  description,
  tags,
  image
}: Project) {
  const formattedDate = useFormattedDate(date, "dd MMMM yyyy");

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-6 h-6 rounded-full bg-zinc-400 group-hover:bg-orange-500 transition-all flex items-center justify-center">
          <Clock3 size={16} className="text-white" />
        </div>
        <p className="font-bold text-xs">{formattedDate}</p>
      </div>
      <div className="flex flex-col border-l-[3px] ml-[10px] pl-5 pt-3 pb-10 border-zinc-400 group-hover:border-orange-500 transition-all gap-2">
        <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
        <p className="text-sm text-zinc-600">{description}</p>
        <div className="flex flex-row gap-2 flex-wrap ">
          {tags.map((tag) => {
            return (
              <div
                key={tag}
                className="h-6 px-3 rounded-lg bg-zinc-400 hover:bg-orange-500 transition-all cursor-pointer flex items-center justify-center"
              >
                <p className="text-xs font-bold text-white">{tag}</p>
              </div>
            );
          })}
        </div>
        <div className="relative w-full h-[200px] md:h-[400px] mt-2">
          <Image className="rounded-lg object-cover shadow" src={image} alt={title} fill />
        </div>
      </div>
    </div>
  );
}
