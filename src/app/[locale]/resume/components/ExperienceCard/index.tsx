import { dayjs } from "@/libs/dayjs";

interface ExperienceCardProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  description: string;
}

export default function ExperienceCard({
  description,
  endDate,
  company,
  location,
  locationType,
  startDate,
  title,
}: ExperienceCardProps) {
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const formatDuration = (startDate: string, endDate?: string) => {
    const start = dayjs(startDate);
    const end = endDate ? dayjs(endDate) : dayjs(); // Usa a data atual se endDate estiver vazio

    const startFormatted = capitalize(start.format("MMM YYYY"));
    const endFormatted = endDate
      ? capitalize(end.format("MMM YYYY"))
      : "até o momento";

    const monthsDiff = end.diff(start, "months");
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    const yearsText = years > 0 ? `${years} ano${years > 1 ? "s" : ""}` : "";
    const monthsText =
      months > 0 ? `${months} mês${months > 1 ? "es" : ""}` : "";
    const durationText = [yearsText, monthsText].filter(Boolean).join(" e ");

    return `${startFormatted} a ${endFormatted} · ${durationText}`;
  };

  return (
    <div className="relative bg-zinc-900 flex flex-col py-9 px-14 space-y-3">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-[14px] w-6 h-6 bg-lime-400 rotate-45"></div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <h3 className="font-medium text-md">
        {company} - {location}
      </h3>
      <p className="font-normal text-sm">
        {locationType} - {formatDuration(startDate, endDate)}
      </p>
      <p className="font-normal text-sm">{description}</p>
    </div>
  );
}
