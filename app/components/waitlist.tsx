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
      className="flex flex-col gap-6 w-full bg-[#11140F] p-10 mobile:p-6 rounded-lg"
    >
      <h2 className="text-3xl text-left text-[#EFF5ED]/80 mb-4 mobile:text-2xl">Start Your Journey Towards Financial Independence</h2>
      <label className="text-[#C1CCBC] -mb-5 text-base mobile:text-sm" htmlFor="name">Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 mobile:p-2.5 text-base mobile:text-sm placeholder:text-[#434D3E] bg-[#1B1F19] border border-[#1F241D] rounded focus:outline-none focus:ring-1 focus:ring-white"
      />
      <label className="text-[#C1CCBC] -mb-5 text-base mobile:text-sm" htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 mobile:p-2.5 text-base mobile:text-sm placeholder:text-[#434D3E] bg-[#1B1F19] border border-[#1F241D] rounded focus:outline-none focus:ring-1 focus:ring-white"
      />
<fieldset className="w-full mb-4">
  <legend className="text-[#C1CCBC] text-lg mobile:text-base mb-0.5">Investment Interest</legend>
  <p className="text-[#777E73] text-base mobile:text-sm mb-3">
    Select how often you plan to invest to start building your crypto portfolio.
  </p>
  <div className="flex flex-col gap-2">
    {["Daily", "Weekly", "Bi-Weekly", "Monthly", "Lumpsum Amounts"].map((option) => (
      <label
        key={option}
        className={`flex items-center gap-3 text-lg mobile:text-base cursor-pointer font-light ${
          formData.investmentInterest === option ? "text-white" : "text-[#C1CCBC]"
        }`}
      >
        <div
          className={`w-5 h-5 mobile:w-4 mobile:h-4 rounded-full border-[1.7px] flex items-center justify-center ${
            formData.investmentInterest === option ? "border-[#A036F3]" : "border-[#3C3641]"
          }`}
        >
          {formData.investmentInterest === option && (
            <div className="w-2.5 h-2.5 mobile:w-2 mobile:h-2 rounded-full bg-[#A036F3]" />
          )}
        </div>
        {option}
        <input
          type="radio"
          name="investmentInterest"
          value={option}
          checked={formData.investmentInterest === option}
          onChange={handleChange}
          className="hidden"
        />
      </label>
    ))}
  </div>
</fieldset>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-3 mobile:py-2.5 rounded text-lg mobile:text-base font-semibold text-black transition-all duration-200 ${
          isPending ? "bg-gray-500 cursor-not-allowed border border-[#3F7515]" : "bg-[#579D1F] hover:bg-[#579D1F]/80"
        }`}
      >
        {isPending ? "Submitting..." : "Join the Waitlist Now"}
      </button>
      {message && <p className={`text-lg mt-2 ${message.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
        {message}
      </p>}
    </form>
  );
}
