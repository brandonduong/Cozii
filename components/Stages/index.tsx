"use client";
import { useState } from "react";
import { clsx } from "clsx";
import { FormData, useFormData } from "@/contexts/FormContext";
import Personal from "./Personal";
import Travel from "./Travel";
import Health from "./Health";

export default function Stages() {
  const [stage, setStage] = useState(0);

  const stages: string[] = [
    "personal information",

    "travel preferences",
    "health and safety",
  ];

  function onSubmit(data: FormData) {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      alert(Object.entries(data).map(([key, val]) => `${key}: ${val}`));
    }
  }

  function NavButtons() {
    return (
      <div className="flex justify-between gap-2">
        <button
          onClick={() => setStage(stage - 1)}
          className={clsx({ invisible: stage === 0 })}
        >
          Prev
        </button>
        <button type="submit">
          {stage === stages.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-2 bg-gray-100 rounded-xl border-2 border-black text-black">
      <h3 className="capitalize text-xl font-black text-center">
        {stages[stage]}
      </h3>
      <hr className="border-black my-2" />
      {stage === 0 && (
        <Personal onSubmit={(data) => onSubmit(data)}>
          <NavButtons />
        </Personal>
      )}
      {stage === 1 && (
        <Travel onSubmit={(data) => onSubmit(data)}>
          <NavButtons />
        </Travel>
      )}
      {stage === 2 && (
        <Health onSubmit={(data) => onSubmit(data)}>
          <NavButtons />
        </Health>
      )}
    </div>
  );
}
