// src/components/showcase/GalleryCarousel.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const demoImg = "https://ik.imagekit.io/izqq5ffwt/wood-sideboard-green-living-room-with-copy-space.jpg?updatedAt=1763968065051";

const slides = [
  { src: demoImg, title: "Modern Modular Kitchen", subtitle: "Sleek cabinetry · Durable finishes" },
  { src: demoImg, title: "Cozy Living Room", subtitle: "Ambient lighting · Custom storage" },
  { src: demoImg, title: "Contemporary Bedroom", subtitle: "Minimal design · Smart wardrobes" },
  { src: demoImg, title: "Elegant Dining Space", subtitle: "Space-optimised layouts" },
];

export default function GalleryCarousel() {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);
  const autoplayTimer = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const AUTOPLAY_DELAY = 3000; // ms

  useEffect(() => {
    if (!sliderRef.current) return;

    const s = new KeenSlider(sliderRef.current, {
      loop: true,
      renderMode: "performance",
      slides: {
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
      },
      slideChanged(sl) {
        setCurrent(sl.track.details.rel);
      },
    });

    sliderInstance.current = s;

    // Autoplay handler
    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer.current = setTimeout(function autoplay() {
        if (!sliderInstance.current) return;
        sliderInstance.current.next();
        autoplayTimer.current = setTimeout(autoplay, AUTOPLAY_DELAY);
      }, AUTOPLAY_DELAY);
    };

    const stopAutoplay = () => {
      if (autoplayTimer.current) {
        clearTimeout(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    };

    // Start autoplay initially
    startAutoplay();

    // Pause on pointer enter; resume on leave
    const el = sliderRef.current;
    const onPointerEnter = () => {
      setIsHovered(true);
      stopAutoplay();
    };
    const onPointerLeave = () => {
      setIsHovered(false);
      startAutoplay();
    };

    el.addEventListener("mouseenter", onPointerEnter);
    el.addEventListener("mouseleave", onPointerLeave);

    // Also pause when window/tab loses focus
    const onVisibility = () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stopAutoplay();
      el.removeEventListener("mouseenter", onPointerEnter);
      el.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      s.destroy();
    };
  }, []);

  const goTo = (idx) => {
    if (!sliderInstance.current) return;
    sliderInstance.current.moveToIdx(idx);
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 text-center mb-10"
        >
          Transforming Homes with Stunning Designs
        </motion.h2>

        {/* Navigation arrows */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-30">
          <button
            aria-label="Previous slide"
            onClick={() => sliderInstance.current?.prev()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30">
          <button
            aria-label="Next slide"
            onClick={() => sliderInstance.current?.next()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <FiChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="keen-slider rounded-2xl overflow-visible"
          aria-roledescription="carousel"
        >
          {slides.map((item, idx) => (
            <motion.div
              key={idx}
              className="keen-slider__slide px-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * idx }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {/* image */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-64 md:h-72 lg:h-80 object-cover transform transition-transform duration-500 ease-out hover:scale-105"
                />

                {/* caption overlay */}
                <div className="absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{item.subtitle}</p>
                </div>

                {/* subtle badge showing index */}
                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                  {idx + 1} / {slides.length}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3" role="tablist" aria-label="Carousel dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={current === idx}
              className={`w-3 h-3 rounded-full transition ${
                current === idx ? "bg-red-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Pause tooltip when hovered */}
        <div className="text-center mt-4 text-sm text-gray-500">
          {isHovered ? "Autoplay paused (hovering)" : "Autoplay running"}
        </div>
      </div>
    </section>
  );
}
