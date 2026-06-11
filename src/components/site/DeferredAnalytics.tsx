import { useEffect, useState } from "react";

type AnalyticsComponent = React.ComponentType;

export function DeferredAnalytics() {
  const [Analytics, setAnalytics] = useState<AnalyticsComponent | null>(null);

  useEffect(() => {
    const load = () => {
      void import("@vercel/analytics/react").then((module) => {
        setAnalytics(() => module.Analytics);
      });
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(load, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }

    const id = window.setTimeout(load, 2500);
    return () => window.clearTimeout(id);
  }, []);

  if (!Analytics) {
    return null;
  }

  return <Analytics />;
}
