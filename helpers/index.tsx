import { useState, useEffect } from "react";

/**
 * Hook to determine if SSR has completed.
 * @returns {boolean} `true` if SSR is complete (running on the client side).
 */
export const useSSRComplete = (): boolean => {
  const [isSSRComplete, setIsSSRComplete] = useState(false);

  useEffect(() => {
    // Runs only on the client after the initial render.
    setIsSSRComplete(true);
  }, []);

  return isSSRComplete;
};
