import { useFormData } from "@/contexts/FormContext";
import { useForm } from "react-hook-form";
import Field from "../Forms/Field";
import { CustomInput } from "../Forms/CustomInput";
import { CustomTextArea } from "../Forms/CustomTextArea";

export default function Health({
  onSubmit,
  children,
}: {
  onSubmit: () => void;
  children: React.ReactNode;
}) {
  const { form, setForm } = useFormData();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: form });

  console.log(errors);

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setForm({ ...form, ...data });
        onSubmit();
      })}
    >
      <Field
        label="Health Declaration"
        error={errors["health"]?.message}
        id="health"
      >
        <div className="flex gap-2 justify-evenly">
          {["Yes", "No"].map((option) => {
            return (
              <div key={`health${option}`} className="flex items-center gap-2">
                <span>{option}</span>
                <CustomInput
                  type="radio"
                  value={option}
                  {...register("health", {
                    required: `Health Declaration is required.`,
                  })}
                  id="health"
                />
              </div>
            );
          })}
        </div>
      </Field>

      <Field
        label="Emergency Contact Email"
        error={errors["emergencyEmail"]?.message}
        id="emergencyEmail"
      >
        <CustomInput
          type="email"
          placeholder="Emergency Contact Email"
          {...register("emergencyEmail", {
            required: `Emergency Contact Email is required.`,
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format." },
          })}
          id="emergencyEmail"
        />
      </Field>

      <Field
        label="Emergency Contact Phone"
        error={errors["emergencyPhone"]?.message}
        id="emergencyPhone"
      >
        <CustomInput
          type="Tel"
          placeholder="Emergency Contact Phone"
          {...register("emergencyPhone", {
            required: `Emergency Contact Phone is required.`,
            pattern: { value: /^\d{10}$/, message: "Invalid phone number." },
          })}
          id="emergencyPhone"
        />
      </Field>

      <Field
        label=" Any Medical Conditions"
        error={errors["med"]?.message}
        id="med"
      >
        <CustomTextArea
          type="text"
          placeholder="Any Medical Conditions"
          {...register("med", {
            required: `Any Medical Conditions is required.`,
          })}
          id="med"
        />
      </Field>

      {children}
    </form>
  );
}
