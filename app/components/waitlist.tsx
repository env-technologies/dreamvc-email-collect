"use client";

import { useState, useTransition } from "react";
import { addToWaitlist } from "../actions/addToWaitlist";

export default function Waitlist() {
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: ""
  });
  const [message, setMessage] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  // Define a type-safe change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Define the submit handler with proper error typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setMessage("Please fill out both fields.");
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
      className="flex flex-col gap-4 items-center w-full max-w-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 outline-none bg-[#0c1704] border border-[#]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 outline-none bg-[#0c1704] border border-[#]"
      />
      <button
        type="submit"
        disabled={isPending}
        className={`px-6 py-2 border ${
          isPending ? "bg-gray-500" : ""
        } text-white`}
      >
        {isPending ? "Submitting..." : "Join Waitlist"}
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
