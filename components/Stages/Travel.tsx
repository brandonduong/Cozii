import { useFormData } from "@/contexts/FormContext";
import { useForm } from "react-hook-form";
import Field from "../Forms/Field";
import { CustomInput } from "../Forms/CustomInput";
import { CustomTextArea } from "../Forms/CustomTextArea";

export default function Travel({
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
      <Field label="Departure Date" error={errors["dep"]?.message} id="dep">
        <CustomInput
          type="date"
          placeholder="Departure Date"
          {...register("dep", {
            required: `Departure Date is required.`,
          })}
          id="dep"
        />
      </Field>

      <Field label="Return Date" error={errors["ret"]?.message} id="ret">
        <CustomInput
          type="date"
          placeholder="Return Date"
          {...register("ret", {
            required: `Return Date is required.`,
          })}
          id="ret"
        />
      </Field>

      <Field
        label="Accomodation Preference"
        error={errors["acc"]?.message}
        id="acc"
      >
        <CustomTextArea
          type="text"
          placeholder="Accomodation Preference"
          {...register("acc", {
            required: `Accomodation Preference is required.`,
          })}
          id="acc"
        />
      </Field>

      <Field
        label="Special Requests or Preferences"
        error={errors["special"]?.message}
        id="special"
      >
        <CustomTextArea
          type="text"
          placeholder="Special Requests or Preferences"
          {...register("special", {
            required: `Special Requests or Preferences is required.`,
          })}
          id="special"
        />
      </Field>

      {children}
    </form>
  );
}
