import { FormData, useFormData } from "@/contexts/FormContext";
import { useForm } from "react-hook-form";
import Field from "../Forms/Field";
import { CustomInput } from "../Forms/CustomInput";
import { CustomTextArea } from "../Forms/CustomTextArea";

export default function Personal({
  onSubmit,
  children,
}: {
  onSubmit: (data: FormData) => void;
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
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        setForm({ ...form, ...data });
        onSubmit(data);
      })}
    >
      <Field label="Full Name" error={errors["name"]?.message} id="name">
        <CustomInput
          type="text"
          placeholder="Full Name"
          {...register("name", {
            required: `Full Name is required.`,
          })}
          id="name"
        />
      </Field>

      <Field label="Date of Birth" error={errors["birth"]?.message} id="name">
        <CustomInput
          type="date"
          placeholder="Date of Birth"
          {...register("birth", {
            required: `Date of Birth is required.`,
          })}
          id="birth"
        />
      </Field>

      <Field label="Nationality" error={errors["nat"]?.message} id="nat">
        <select
          {...register("nat", {
            required: `Nationality is required.`,
          })}
          className="rounded-xl border-2 border-black focus:border-pink-500 px-2 py-1"
        >
          <option value="" disabled selected>
            Select Nationality
          </option>
          <option value="Earth">Earth</option>
          <option value="Not Earth">Not Earth</option>
        </select>
      </Field>

      <Field label="Email" error={errors["email"]?.message} id="email">
        <CustomInput
          type="email"
          placeholder="Email"
          {...register("email", {
            required: `Email is required.`,
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format." },
          })}
          id="email"
        />
      </Field>

      <Field label="Phone" error={errors["phone"]?.message} id="phone">
        <CustomInput
          type="Tel"
          placeholder="Phone"
          {...register("phone", {
            required: `Phone is required.`,
            pattern: { value: /^\d{10}$/, message: "Invalid phone number." },
          })}
          id="phone"
        />
      </Field>

      {children}
    </form>
  );
}
