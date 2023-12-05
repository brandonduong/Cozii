import Stages from "@/components/Stages";
import { FormProvider } from "@/contexts/FormContext";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-2 items-center bg-gradient-to-t from-black to-red-700 gap-2">
      <span className="text-center">
        <h1 className="text-4xl font-black">Two-way Trip to Mars</h1>
        <h6 className="text-xs">We try to bring you back!</h6>
      </span>
      <div className="bg-white rounded-full p-2 border-4 border-black">
        <Image src="/mars.png" width={128} height={128} alt="mars" />
      </div>

      <FormProvider>
        <Stages />
      </FormProvider>
    </main>
  );
}
