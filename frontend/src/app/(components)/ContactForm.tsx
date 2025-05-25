"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .max(500, "Message can't exceed 500 characters")
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      //   const response = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(data),
      //   });

      //   if (!response.ok) throw new Error("Something went wrong");

      alert("Message sent successfully!");
      reset();
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 grid grid-col-1 md:grid-col-2 mx-auto p-4 shadow-lg  rounded-lg"
    >
      <div className="">
        <label className="block mb-1 text-18">Name</label>
        <input
          {...register("name")}
          className="w-full p-2 border rounded"
          placeholder="e.g. gates"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="">
        <label className="block mb-1 text-18">Phone Number</label>
        <input
          {...register("phone")}
          className="w-full p-2 border rounded"
          placeholder="Type here"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div className="">
        <label className="block mb-1 text-18">Email ID</label>
        <input
          {...register("email")}
          className="w-full p-2 border rounded"
          placeholder="e.g. gates@mail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-18">Your Message</label>
        <textarea
          {...register("message")}
          className="w-full p-2 border rounded"
          placeholder="Type here"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950"
      >
        {isSubmitting ? "Sending..." : "Let's Connect"}
      </button>
    </form>
  );
}

export default ContactForm;
