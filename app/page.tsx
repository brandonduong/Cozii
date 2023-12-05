import Stages from "@/components/Stages";
import { FormProvider } from "@/contexts/FormContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-t from-black to-red-500 gap-2">
      <span className="text-center mb-6">
        <h1 className="text-4xl font-black">One-way Trip to Mars</h1>
        <h6 className="text-xs">You will be there forever</h6>
      </span>
      <FormProvider>
        <Stages />
      </FormProvider>
    </main>
  );
}
