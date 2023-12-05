"use client";
import { useState } from "react";
import { clsx } from "clsx";
import { useFormData } from "@/contexts/FormContext";
import Personal from "./Personal";
import Travel from "./Travel";
import Health from "./Health";

export default function Stages() {
  const [stage, setStage] = useState(0);
  const { form } = useFormData();

  const stages: string[] = [
    "personal information",
    "travel preferences",
    "health and safety",
  ];

  function onSubmit() {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      alert(Object.entries(form).map(([key, val]) => `${key}: ${val}\n`));
    }
  }

  function NavButtons() {
    return (
      <div className="flex justify-between gap-2">
        <button
          onClick={() => setStage(stage - 1)}
          className={clsx(
            { invisible: stage === 0 },
            "text-white bg-black rounded-xl py-2 basis-1/2"
          )}
        >
          Previous
        </button>
        <button
          type="submit"
          className="text-white bg-black rounded-xl py-2 basis-1/2"
        >
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
        <Personal onSubmit={() => onSubmit()}>
          <NavButtons />
        </Personal>
      )}
      {stage === 1 && (
        <Travel onSubmit={() => onSubmit()}>
          <NavButtons />
        </Travel>
      )}
      {stage === 2 && (
        <Health onSubmit={() => onSubmit()}>
          <NavButtons />
        </Health>
      )}
    </div>
  );
}
