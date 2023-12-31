"use client";

import { createContext, useContext, useState } from "react";

export interface FormData {
  name: string;
  birth: string;
  nat: string;
  email: string;
  phone: string;
  dep: string;
  ret: string;
  acc: string;
  special: string;
  health: string;
  emergencyEmail: string;
  emergencyPhone: string;
  med: string;
}

export type FormField = keyof FormData;

interface FormDataType {
  form: FormData;
  setForm: (form: FormData) => void;
}

export const FormContext = createContext<FormDataType>({} as FormDataType);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    birth: "",
    nat: "",
    email: "",
    phone: "",
    dep: "",
    ret: "",
    acc: "",
    special: "",
    health: "",
    emergencyEmail: "",
    emergencyPhone: "",
    med: "",
  });
  const value = { form, setForm };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormData() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within the FormProvider");
  }
  return context;
}
