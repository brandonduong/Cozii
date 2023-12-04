// Steps/Contact.js

import { useForm } from "react-hook-form";
import { FieldType, FormField, useFormData } from "@/contexts/FormContext";
import Field from "../Forms/Field";
import { CustomInput } from "../Forms/CustomInput";
import { CustomTextArea } from "../Forms/CustomTextArea";

export default function Stage({
  fields,
  children,
  onSubmit,
}: {
  fields: FieldType[];
  children: React.ReactNode;
  onSubmit: () => void;
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
      {fields.map((field) => (
        <Field
          label={field.placeholder}
          error={""}
          id={field.id}
          key={field.placeholder}
        >
          {field.type === "textarea" ? (
            <CustomTextArea
              placeholder={field.placeholder}
              {...register(field.id, {
                required: true,
                pattern: field.pattern,
              })}
              id={field.id}
            />
          ) : (
            <CustomInput
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.id, {
                required: true,
                pattern: field.pattern,
              })}
              id={field.id}
            />
          )}
        </Field>
      ))}
      {children}
    </form>
  );
}
