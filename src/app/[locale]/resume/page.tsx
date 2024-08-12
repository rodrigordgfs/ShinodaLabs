import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import type { Metadata } from "next";
import ProgressBar from "./components/ProgressBar";
import ExperienceCard from "./components/ExperienceCard";
import experienceService from "@/services/experiences";
import ResumeMetadata from "./meta";
import educationService from "@/services/education";
import EducationCard from "./components/EducationCard";
import skillService from "@/services/skills";
import { useTranslations } from "next-intl";
import ExperienceEducation from "./components/ExperienceEducation";
import Skills from "./components/Skills";

export interface Experience {
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

export interface Education {
  id: string;
  course: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
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

interface SkillResponse {
  data: Skill[];
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

async function getSkills(): Promise<Skill[]> {
  try {
    const res = await skillService.get();

    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    if (!res.data.data) {
      throw new Error("Educations not found in the response");
    }

    const { data } = res.data as SkillResponse;

    return data;
  } catch (error) {
    console.error("Error fetching educations:", error);
    throw error;
  }
}

export const metadata: Metadata = ResumeMetadata;

export default async function ResumePage() {
  const [experiences, educations, skills] = await Promise.all([
    getExperiences(),
    getEducations(),
    getSkills(),
  ]);

  return (
    <div className="w-full max-w-full text-zinc-50 flex flex-col space-y-20 relative py-10">
      <ExperienceEducation experiences={experiences} educations={educations} />
      <Skills skills={skills} />
    </div>
  );
}
