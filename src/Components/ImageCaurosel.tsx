import { useEffect, useState } from "react";

export default function ImageCarousel({
  images = [],
  interval = 4000,
}: {
  images?: string[];
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto slide
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setTimeout(() => {
      triggerNext();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, images, interval]);

  const triggerNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 600);
  };

  const nextImage = () => {
    triggerNext();
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 600);
  };

  if (!images.length) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        className={`w-full bg-neutral-300 dark:bg-neutral-600 aspect-video object-cover rounded-md transition-opacity duration-300 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />

      {/* Prev button */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-md hover:bg-black/60"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-md hover:bg-black/60"
      >
        ›
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 bg-blue-600/40">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
