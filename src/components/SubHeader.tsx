interface SubHeaderProps {
  title: string;
  description: string;
}

export default function SubHeader({ title, description }: SubHeaderProps) {
  return (
    <div className="flex flex-col space-y-7">
      <p className="text-base text-center md:text-start text-zinc-400 font-normal">
        {description}
      </p>
      <h1 className="font-bold text-5xl text-center md:text-start text-zinc-100">
        {title}
      </h1>
    </div>
  );
}
