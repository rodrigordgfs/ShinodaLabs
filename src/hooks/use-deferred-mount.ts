import { useEffect, useState } from "react";

export function useDeferredMount(idleTimeout = 2000) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(enable, { timeout: idleTimeout });
      return () => cancelIdleCallback(id);
    }

    const id = window.setTimeout(enable, 200);
    return () => window.clearTimeout(id);
  }, [idleTimeout]);

  return ready;
}
