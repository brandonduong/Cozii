import Stages from "@/components/Stages";
import { FormProvider } from "@/contexts/FormContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-2 sm:p-24 md:px-32 lg:items-center bg-gradient-to-t from-black to-red-500 gap-2">
      <span className="text-center mb-6">
        <h1 className="text-4xl font-black">Two-way Trip to Mars</h1>
        <h6 className="text-xs">We try to bring you back!</h6>
      </span>
      <FormProvider>
        <Stages />
      </FormProvider>
    </main>
  );
}
