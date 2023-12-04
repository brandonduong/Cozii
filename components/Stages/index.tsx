"use client";
import { useState } from "react";
import { clsx } from "clsx";
import { FieldType, FormField, useFormData } from "@/contexts/FormContext";
import Stage from "./Stage";

interface Stage {
  title: string;
  fields: FieldType[];
}

export default function Stages() {
  const [stage, setStage] = useState(0);

  const stages: Stage[] = [
    {
      title: "personal information",
      fields: [
        { type: "text", placeholder: "Full Name", id: "name" },
        { type: "date", placeholder: "Date of Birth", id: "birth" },
        { type: "text", placeholder: "Nationality", id: "nat" },
        {
          type: "email",
          placeholder: "Email",
          pattern: /^\S+@\S+$/,
          id: "email",
        },
        { type: "Tel", placeholder: "Phone", pattern: /^\d{10}/, id: "phone" },
      ],
    },
    {
      title: "travel preferences",
      fields: [
        { type: "date", placeholder: "Departure Date", id: "dep" },
        { type: "date", placeholder: "Return Date", id: "ret" },
        { type: "select", placeholder: "Accomodation Preference", id: "acc" },
        {
          type: "textarea",
          placeholder: "Special Requests or Preferences",
          id: "special",
        },
      ],
    },
    {
      title: "health and safety",
      fields: [
        { type: "text", placeholder: "Health Declaration", id: "health" },
        {
          type: "date",
          placeholder: "Emergency Contact Information",
          id: "emergency",
        },
        { type: "text", placeholder: "Any Medical Conditions", id: "med" },
      ],
    },
  ];

  const s = stages[stage];

  function onSubmit() {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      alert("done");
    }
  }

  return (
    <div>
      <h3 className="capitalize">{stages[stage].title}</h3>
      <Stage fields={s.fields} key={s.title} onSubmit={() => onSubmit()}>
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
      </Stage>
    </div>
  );
}
