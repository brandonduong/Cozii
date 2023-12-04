import Stages from "@/components/Stages";
import { FormProvider } from "@/contexts/FormContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider>
        <Stages />
      </FormProvider>
    </main>
  );
}
