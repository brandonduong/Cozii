import { forwardRef, HTMLProps } from "react";

type TextAreaProps = HTMLProps<HTMLTextAreaElement>;
export const CustomTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function CustomTextArea(props, ref) {
    return (
      <textarea
        ref={ref}
        className="rounded border-2 border-pink-500 px-2 py-1 focus:outline-none text-black"
        {...props}
      />
    );
  }
);
