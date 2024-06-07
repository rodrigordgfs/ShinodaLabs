"use client";

import { Clock3, EyeIcon, GithubIcon } from "lucide-react";
import type { Project } from "../FeedProjects";
import useFormattedDate from "@/hooks/useFormattedDate";
import Image from "next/image";
import { useRipple } from "react-use-ripple";
import { useRef } from "react";

export default function FeedProjectItem({
  date,
  title,
  description,
  tags,
  image,
  link,
  repository,
}: Project) {
  const refPreview = useRef<HTMLAnchorElement | null>(null);
  const refGithub = useRef<HTMLAnchorElement | null>(null);

  const formattedDate = useFormattedDate(date, "dd MMMM yyyy");

  useRipple(refPreview, {
    animationLength: 600,
    rippleColor: "rgba(255,255,255,0.6)",
  });

  useRipple(refGithub, {
    animationLength: 600,
    rippleColor: "rgba(255,255,255,0.6)",
  });

  return (
    <article className="flex flex-col group rounded-lg">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-6 h-6 rounded-full bg-zinc-400 group-hover:bg-orange-500 transition-all flex items-center justify-center">
          <Clock3 size={16} className="text-white" />
        </div>
        <p className="font-bold text-xs">{formattedDate}</p>
      </div>
      <div className="flex flex-col border-l-[3px] ml-[10px] px-5 pt-3 pb-10 border-zinc-400 group-hover:border-orange-500 transition-all gap-2">
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
          <Image
            className="rounded-lg object-cover shadow"
            src={image}
            alt={title}
            fill
          />
        </div>
        <div className="flex flex-row w-full gap-2 mt-2">
          <a
            ref={refPreview}
            href={link}
            target="_blank"
            className="w-full h-10 rounded-lg bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold flex flex-row items-center justify-center gap-2"
          >
            <EyeIcon size={16} className="text-white" />
            Preview
          </a>
          {repository && (
            <a
              ref={refGithub}
              href={repository}
              target="_blank"
              className="w-full h-10 rounded-lg bg-zinc-500 hover:bg-zinc-600 transition-all text-white font-semibold  flex flex-row items-center justify-center gap-2"
            >
              <GithubIcon size={16} className="text-white" />
              Github
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
