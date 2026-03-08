import { useEffect, useRef, useState } from "react";

function VideoMain({ videoLink }) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "100px 0px", // Запас в 100px до попадания в зону видимости
        threshold: 0.1, // Срабатывает, когда 10% элемента видно
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isLoaded && videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.warn("Autoplay failed:", e);
      });
    }
  }, [isLoaded]);

  return (
    <video
      controls
      ref={videoRef}
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100%" }}
      className=""
    >
      {isLoaded && <source src={videoLink} type="video/mp4" />}
    </video>
  );
}

export default VideoMain;
