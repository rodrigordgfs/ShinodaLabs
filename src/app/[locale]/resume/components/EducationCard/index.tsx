import { dayjs } from "@/libs/dayjs";

interface EducationCardProps {
  course: string;
  startDate: string;
  endDate: string;
  school: string;
  description: string;
}

export default function EducationCard({
  course,
  endDate,
  startDate,
  school,
  description,
}: EducationCardProps) {
  const startYear = dayjs(startDate).year();
  const endYear = dayjs(endDate).year();

  return (
    <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
      <h3 className="font-medium text-xl">{course}</h3>
      <p className="font-normal text-sm">
        {school} {startYear} / {endYear}
      </p>
      <p className="font-normal text-sm">{description}</p>
    </div>
  );
}
