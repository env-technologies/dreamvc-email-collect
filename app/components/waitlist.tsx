"use client";

import { useState, useTransition } from "react";
import { addToWaitlist } from "../actions/addToWaitlist";

export default function Waitlist() {
  const [formData, setFormData] = useState<{ name: string; email: string; investmentInterest: string }>({
    name: "",
    email: "",
    investmentInterest: "",
  });
  const [message, setMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.investmentInterest) {
      setMessage("Please fill out all fields.");
      return;
    }

    startTransition(() => {
      addToWaitlist(formData)
        .then((result: string) => {
          setMessage(result);
          setFormData({ name: "", email: "", investmentInterest: "" });
        })
        .catch((error: Error) => {
          setMessage(error.message || "An unexpected error occurred.");
        });
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full bg-[#11140F] p-10 rounded-lg"
    >
      <h2 className="text-2xl text-left text-[#EFF5ED] mb-4">Start Your Journey Towards Financial Independence</h2>
      <label className="text-[#C1CCBC] -mb-5 text-sm" htmlFor="name">Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 text-sm placeholder:text-[#434D3E] bg-[#1B1F19] rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <label className="text-[#C1CCBC] -mb-5 text-sm" htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 text-sm placeholder:text-[#434D3E] bg-[#1B1F19] rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <fieldset className="w-full">
        <legend className="text-[#C1CCBC] text-sm mb-2">Investment Interest</legend>
        <p className="text-[#777E73] text-sm mb-4">Select how often you plan to invest to start building your crypto portfolio.</p>
        <div className="flex flex-col gap-2">
          {["Daily", "Weekly", "Bi-Weekly", "Monthly", "Lumpsum Amounts"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-white">
              <input
                type="radio"
                name="investmentInterest"
                value={option}
                checked={formData.investmentInterest === option}
                onChange={handleChange}
                className="text-[#A036F3] focus:ring-[#A036F3]"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-3 rounded text-sm font-semibold text-black transition-all duration-200 ${
          isPending ? "bg-gray-500 cursor-not-allowed border border-[#3F7515]" : "bg-[#579D1F] hover:bg-[#579D1F]/80"
        }`}
      >
        {isPending ? "Submitting..." : "Join the Waitlist Now"}
      </button>
      {message && <p className={`text-sm mt-2 ${message.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
        {message}
      </p>}
    </form>
  );
}
