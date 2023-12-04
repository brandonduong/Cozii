import { forwardRef, HTMLProps } from "react";

type InputProps = HTMLProps<HTMLInputElement>;
export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  function CustomInput(props, ref) {
    return (
      <input
        ref={ref}
        className="rounded border-2 border-pink-500 px-2 py-1 focus:outline-none text-black"
        {...props}
      />
    );
  }
);
