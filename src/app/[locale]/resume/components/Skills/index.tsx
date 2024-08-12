'use client'

import SubHeader from "@/components/SubHeader";
import ProgressBar from "../ProgressBar";
import { Skill } from "../../page";
import { useTranslations } from "next-intl";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const t = useTranslations("ResumePage");

  return (
    <div className="flex flex-col md:flex-col max-w-6xl w-full mx-auto px-4 gap-10">
      <SubHeader title={t("my_skills")} description={t("skill_subtitle")} />

      <div className="flex flex-col max-w-6xl w-full mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {skills.map((item, index) => (
            <div key={index}>
              <ProgressBar
                key={item.id}
                skill={item.name}
                percentage={item.percentage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
