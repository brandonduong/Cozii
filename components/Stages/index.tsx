"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { clsx } from "clsx";

export default function Stages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [stage, setStage] = useState(0);

  console.log(errors);

  const stages = [
    {
      title: "personal information",
      fields: [
        { type: "text", placeholder: "Full Name" },
        { type: "date", placeholder: "Date of Birth" },
        { type: "text", placeholder: "Nationality" },
        { type: "email", placeholder: "Email" },
        { type: "Tel", placeholder: "Phone", pattern: /^\d{10}/ },
      ],
    },
    {
      title: "travel preferences",
      fields: [
        { type: "text", placeholder: "Full Name" },
        { type: "date", placeholder: "Date of Birth" },
        { type: "text", placeholder: "Nationality" },
        { type: "email", placeholder: "Email" },
        { type: "Tel", placeholder: "Phone", pattern: /^\d{10}/ },
      ],
    },
    {
      title: "health and safety",
      fields: [
        { type: "text", placeholder: "Full Name" },
        { type: "date", placeholder: "Date of Birth" },
        { type: "text", placeholder: "Nationality" },
        { type: "email", placeholder: "Email" },
        { type: "Tel", placeholder: "Phone", pattern: /^\d{10}$/ },
      ],
    },
  ];

  return (
    <div>
      <h3>{stages[stage].title}</h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {stages[stage].fields.map((field) => (
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="rounded border-2 border-pink-500 px-2 py-1 focus:outline-none text-black"
            {...register(field.placeholder, {
              required: true,
              pattern: field.pattern,
            })}
            key={field.placeholder}
          />
        ))}

        <button type="submit" className={clsx({ invisible: stage !== 2 })}>
          Submit
        </button>
      </form>

      <div className="flex justify-between gap-2">
        <button
          onClick={() => setStage(stage - 1)}
          className={clsx({ invisible: stage === 0 })}
        >
          Prev
        </button>
        <button
          onClick={() => setStage(stage + 1)}
          className={clsx({ invisible: stage === 2 })}
        >
          Next
        </button>
      </div>
    </div>
  );
}
