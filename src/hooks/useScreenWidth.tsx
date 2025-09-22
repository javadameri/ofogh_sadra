'use client'

import { useEffect, useState } from "react";

export function useScreenWidth(count: number) {
  const [width, setWidth] = useState<boolean | undefined>(false);
  const [widthCount, setWidthCount] = useState<number | undefined>();

  useEffect(() => {
    const Resize = () => {
      const screenWidth = window.innerWidth;
      setWidthCount(screenWidth)
      setWidth(screenWidth >= count);
    };

    Resize();

    window.addEventListener('resize', Resize);

    return () => window.removeEventListener('resize', Resize);

  }, [count]);

  return { width, widthCount };
}
