import { useState } from "react";
import { motion } from "framer-motion";
import { MdSpaceDashboard } from "react-icons/md";
import ProjectGrid from "../../components/showcase/ProjectGrid";

export default function ProjectPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-4 pb-10 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 px-4"
        >
          <MdSpaceDashboard className="text-red-600 text-5xl" />
          <h1 className="text-4xl font-bold text-gray-900">
            Our Interior Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore our modern interior case studies crafted for premium homes.
          </p>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
          <ProjectGrid visibleCount={visibleCount} />

          {/* Load More */}
          <motion.button
            onClick={loadMore}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 px-7 py-3 bg-black text-white rounded-xl shadow-md text-lg font-medium"
          >
            Load More Projects
          </motion.button>
        </div>
      </section>
    </>
  );
}
