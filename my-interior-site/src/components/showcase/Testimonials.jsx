import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "./TestimonialCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Temporary images (use your own later)
import sampleUser from "../../assets/images/HeroImage.jpg";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Suresh & Family",
      message:
        "The team delivered our interiors exactly as promised. Quality is top-notch and timely installation!",
      image: sampleUser,
      rating: 5,
    },
    {
      name: "Rohini & Rajesh",
      message:
        "Loved the modular kitchen design. Space utilization is amazing. Highly professional team!",
      image: sampleUser,
      rating: 5,
    },
    {
      name: "Praveen Kumar",
      message:
        "Great work on our 2BHK. The designers listened to every detail and executed perfectly.",
      image: sampleUser,
      rating: 4,
    },
  ];

  useEffect(() => {
    if (!sliderRef.current) return;

    const s = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 20 },
        },
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    });

    setSlider(s);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 relative">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          What Our Customers Say
        </motion.h2>

        {/* Arrows */}
        {slider && (
          <>
            <button
              onClick={() => slider.prev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 z-30"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => slider.next()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 z-30"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider mt-4">
          {testimonials.map((item, index) => (
            <div key={index} className="keen-slider__slide">
              <TestimonialCard
                name={item.name}
                message={item.message}
                image={item.image}
                rating={item.rating}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-red-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
