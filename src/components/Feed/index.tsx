import { ReactNode } from "react";

interface FeedProps {
  children: ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <section className="bg-white w-full -mt-[260px] md:-mt-[220px] max-w-[680px] rounded-t-lg pt-10 px-8 shadow">
      {children}
    </section>
  );
}
