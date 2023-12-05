import { FormField } from "@/contexts/FormContext";

interface FieldProps {
  children: React.ReactNode;
  label: string;
  error: string | undefined;
  id: FormField;
}
export default function Field({ children, label, error, id }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      {children}
      {error && <small className="error">{error}</small>}
    </div>
  );
}
