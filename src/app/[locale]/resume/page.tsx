import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import type { Metadata } from "next";
import ProgressBar from "./components/ProgressBar";
import ExperienceCard from "./components/ExperienceCard";
import experienceService from "@/services/experiences";
import ResumeMetadata from "./meta";
import educationService from "@/services/education";
import EducationCard from "./components/EducationCard";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

interface Education {
  id: string;
  course: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
}
interface ExperiencesResponse {
  data: Experience[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number | null;
}
interface EducationResponse {
  data: Education[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number | null;
}

async function getExperiences(): Promise<Experience[]> {
  try {
    const res = await experienceService.get();

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    if (!res.data.data) {
      throw new Error("Experiences not found in the response");
    }

    const { data } = res.data as ExperiencesResponse;

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

async function getEducations(): Promise<Education[]> {
  try {
    const res = await educationService.get();

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    if (!res.data.data) {
      throw new Error("Educations not found in the response");
    }

    const { data } = res.data as EducationResponse;

    return data;
  } catch (error) {
    console.error("Error fetching educations:", error);
    throw error;
  }
}

export const metadata: Metadata = ResumeMetadata;

const skills = [
  { skill: "HTML/CSS", percentage: 95 },
  { skill: "React JS", percentage: 90 },
  { skill: "Web Design", percentage: 80 },
  { skill: "Express.js", percentage: 95 },
  { skill: "JavaScript", percentage: 90 },
  { skill: "TypeScript", percentage: 80 },
];

export default async function ResumePage() {
  const [experiences, educations] = await Promise.all([
    getExperiences(),
    getEducations(),
  ]);

  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-20 relative py-10">
      <Header title="Resumo" description="Conheça minhas habilidades" />

      <div className="flex flex-col md:flex-row max-w-6xl w-full mx-auto px-4 gap-10">
        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-2xl mb-6">Experiência</h2>

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
          <h2 className="font-medium text-2xl mb-6">Educação</h2>

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

      <div className="flex flex-col md:flex-col max-w-6xl w-full mx-auto px-4 gap-10">
        <SubHeader
          title="Minhas habilidades"
          description="Meu conhecimento com algumas ferramentas"
        />

        <div className="flex flex-col max-w-6xl w-full mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {skills.map((item, index) => (
              <div key={index}>
                <ProgressBar skill={item.skill} percentage={item.percentage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
