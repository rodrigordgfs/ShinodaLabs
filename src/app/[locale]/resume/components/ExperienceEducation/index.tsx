"use client";

import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import ExperienceCard from "../ExperienceCard";
import EducationCard from "../EducationCard";
import { Education, Experience } from "../../page";

interface ExperienceEducationProps {
  experiences: Experience[];
  educations: Education[];
}

export default function ExperienceEducation({
  educations,
  experiences,
}: ExperienceEducationProps) {
  const t = useTranslations("ResumePage");
  return (
    <>
      <Header title={t("title")} description={t("subtitle")} />

      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto px-4 gap-10">
        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-2xl mb-6">{t("experience")}</h2>

          <div className="divide-y divide-zinc-700 border-l-lime-400 border-l-4">
            {experiences.map((experience) => {
              return (
                <ExperienceCard
                  key={experience.id}
                  description={experience.description}
                  company={experience.company}
                  endDate={experience.endDate}
                  location={experience.location}
                  locationType={experience.locationType}
                  startDate={experience.startDate}
                  title={experience.title}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-2xl mb-6">{t("education")}</h2>

          <div className="divide-y divide-zinc-700 border-l-lime-400 border-l-4">
            {educations.map((education) => {
              return (
                <EducationCard
                  key={education.id}
                  course={education.course}
                  endDate={education.endDate}
                  school={education.school}
                  startDate={education.startDate}
                  description={education.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
