import { useEffect, useRef, useState } from "react";

type LazyWhenVisibleProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  minHeight?: string;
};

export function LazyWhenVisible({
  children,
  className,
  rootMargin = "300px 0px",
  minHeight,
}: LazyWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={!visible && minHeight ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  );
}
