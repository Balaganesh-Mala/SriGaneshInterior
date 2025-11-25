import ServiceCard from "./ServiceCard";
import {
  HiOutlinePencilSquare,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

const ServicesList = () => {
  const steps = [
    {
      Icon: HiOutlinePencilSquare,
      title: "Design",
      description:
        "Meet our expert designers, share your ideas, and get a personalized 3D interior design plan tailored to your needs.",
    },
    {
      Icon: HiOutlineWrenchScrewdriver,
      title: "Execution",
      description:
        "Once the design is finalized, our professional team starts crafting and installing your dream interiors with precision.",
    },
    {
      Icon: HiOutlineCheckBadge,
      title: "Move-In",
      description:
        "Your home is deep cleaned, inspected, and handed over — ready for you to move in and enjoy your beautiful interiors.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Complete Home Interiors in 3 Easy Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ServiceCard
              key={index}
              Icon={step.Icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
