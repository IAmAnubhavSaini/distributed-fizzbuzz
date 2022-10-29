import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function useIntersectionObserver() {
  const [ratio, setRatio] = useState(-1);
  const [y, setY] = useState(-1);
  const [page, setPage] = useState(0);
  const endMarkerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const callback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((value) => {
      const {
        isIntersecting,
        intersectionRatio,
        boundingClientRect = { y: 0 },
      } = value;
      const currentY = boundingClientRect?.y;
      const intersecting =
        isIntersecting && intersectionRatio >= ratio && (!y || currentY < y);

      if (intersecting) {
        setPage(page + 1);
      }
      setY(currentY);
      setRatio(intersectionRatio);
    });

  useEffect(() => {
    if (!containerRef.current || !endMarkerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(callback);

    observer.observe(endMarkerRef.current);

    return () => {
      observer.disconnect();
    };
  });
  return { endMarkerRef, containerRef, page };
}
