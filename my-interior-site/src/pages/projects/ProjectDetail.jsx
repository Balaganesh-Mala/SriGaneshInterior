import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { projectData } from "../../utils/constants";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-3">Project Not Found</h1>
        <button
          onClick={() => navigate("/projects")}
          className="px-5 py-2 bg-black text-white rounded-lg"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="py-6 px-4 border-b"
      >
        <div className="max-w-screen-lg mx-auto">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-3 text-gray-800 font-medium"
          >
            <FaArrowLeft /> Back to Projects
          </button>
        </div>
      </motion.div>

      {/* Banner Image */}
      <div className="w-full h-[300px] md:h-[420px] relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-b-3xl"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Content Section */}
      <section className="py-14 px-6">
        <div className="max-w-screen-md mx-auto text-center space-y-5">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900"
          >
            {project.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-gray-600 text-lg"
          >
            {project.subtitle}
          </motion.p>

          {/* Feature bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left">
            {project.details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                className="flex items-start gap-2"
              >
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <span className="text-gray-700">{d}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
