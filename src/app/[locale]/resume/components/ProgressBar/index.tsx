interface ProgressBarProps {
  skill: string;
  percentage: number;
}

export default function ProgressBar({ skill, percentage }: ProgressBarProps) {
  return (
    <div className="flex flex-col space-y-4 my-4">
      <div className="flex items-center justify-between text-zinc-400 ">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-zinc-800 h-2 relative">
        <div
          className="absolute top-0 left-0 h-full bg-lime-400"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
