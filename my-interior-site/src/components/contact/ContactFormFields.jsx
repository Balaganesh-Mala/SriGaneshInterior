export default function ContactFormFields({ register, errors }) {
  return (
    <div className="grid grid-cols-1 gap-5">
      
      {/* Name */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="input-field"
          placeholder="Your Name"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Phone</label>
        <input
          {...register("phone", { required: "Phone number is required" })}
          className="input-field"
          placeholder="Phone Number"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          className="input-field"
          placeholder="Email Address"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="input-field"
          rows="4"
          placeholder="Type your message here..."
        ></textarea>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>

    </div>
  );
}
