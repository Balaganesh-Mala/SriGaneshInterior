import ServiceIconCard from "./ServiceIconCard";
import {
  HiOutlineHomeModern,
  HiOutlinePaintBrush,
  HiOutlineWrenchScrewdriver,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineCog6Tooth,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

import {
  MdKitchen,
  MdOutlineBedroomParent,
  MdWallpaper,
} from "react-icons/md";

const ServicesIcons = () => {
  const services = [
    { Icon: MdKitchen, title: "Modular Kitchen" },
    { Icon: MdOutlineBedroomParent, title: "Wardrobes" },
    { Icon: HiOutlinePaintBrush, title: "Painting" },
    { Icon: HiOutlineWrenchScrewdriver, title: "Carpentry" },
    { Icon: HiOutlineLightBulb, title: "Electrical Work" },
    { Icon: HiOutlineCog6Tooth, title: "Civil Work" },
    { Icon: HiOutlineCube, title: "Storage Units" },
    { Icon: MdWallpaper, title: "Wallpaper" },
    { Icon: MdKitchen, title: "Flooring" },
    { Icon: HiOutlineHomeModern, title: "Living Room Setup" },
    { Icon: HiOutlineClipboardDocumentCheck, title: "Inspection & Handover" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          End-to-End Interior Solutions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {services.map((item, index) => (
            <ServiceIconCard
              key={index}
              Icon={item.Icon}
              title={item.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIcons;
