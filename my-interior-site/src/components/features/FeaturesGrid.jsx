import FeatureCard from "./FeatureCard";

// Import react icons
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineClock } from "react-icons/hi2";

const FeaturesGrid = () => {
  const features = [
    {
      Icon: HiOutlineHomeModern,
      value: "55000+",
      title: "Homes Delivered",
    },
    {
      Icon: HiOutlineUserGroup,
      value: "600+",
      title: "Interior Designers",
    },
    {
      Icon: HiOutlineBuildingOffice2,
      value: "75",
      title: "Experience Studios",
    },
    {
      Icon: HiOutlineClock,
      value: "45 Days",
      title: "Delivery Guaranteed*",
    },
  ];

  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <FeatureCard
              key={idx}
              Icon={item.Icon}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
