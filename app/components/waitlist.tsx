"use client";

import { useState, useTransition } from "react";
import { addToWaitlist } from "../actions/addToWaitlist";

export default function Waitlist() {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setMessage("Please fill out all fields.");
      return;
    }

    startTransition(() => {
      addToWaitlist(formData)
        .then((result: string) => {
          setMessage(result);
          setFormData({ name: "", email: "" });
        })
        .catch((error: Error) => {
          setMessage(error.message || "An unexpected error occurred.");
        });
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full bg-[rgba(255,255,255,0.08)] p-8 rounded-lg border border-[rgba(255,255,255,0.16)]"
    >
      <h2 className="text-2xl text-center text-white font-semibold mb-4">
        Be the first to access the report.
      </h2>
      <p className="text-center text-[#CCCCCC] mb-6 text-xl">
        Sign up to stay updated and be notified when the full report goes live!
      </p>
      <label className="text-[#C1CCBC] text-sm mb-1" htmlFor="name">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 text-base placeholder:text-[#777E73] bg-[#2B2B2B] border border-[#3C3C3C] rounded focus:outline-none focus:ring-2 focus:ring-[#6FC72A]"
      />
      <label className="text-[#C1CCBC] text-sm mb-1" htmlFor="email">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email here"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 text-base placeholder:text-[#777E73] bg-[#2B2B2B] border border-[#3C3C3C] rounded focus:outline-none focus:ring-2 focus:ring-[#6FC72A]"
      />
      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-3 rounded text-lg font-semibold text-black transition-all duration-200 ${
          isPending ? "bg-gray-500 cursor-not-allowed" : "bg-[#E7F940] hover:bg-[#E7F940]/80"
        }`}
      >
        {isPending ? "Submitting..." : "Notify Me"}
      </button>
      {message && (
        <p
          className={`text-center text-sm mt-4 ${
            message.includes("successfully") ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
