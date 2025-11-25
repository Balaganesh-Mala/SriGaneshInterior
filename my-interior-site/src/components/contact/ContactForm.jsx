import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactFormFields from "./ContactFormFields";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted:", data);
    alert("Thank you! We will contact you soon.");
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white flex-col max-w-screen-lg mx-auto px-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h3>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="input-field"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            className="input-field"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4 md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="input-field"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4 md:col-span-2">
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows={4}
            className="input-field"
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={isSubmitting}
        className="w-full py-3 bg-red-600 text-white font-medium rounded-xl shadow hover:bg-red-700 transition mt-4"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </motion.form>
  );
}
