import { useEffect, useState } from "react";

export const useMountedPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { mounted }
};
