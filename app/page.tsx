import { DarkToggle } from "@/components/DarkToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl text-primary font-bold">Mercs</h1>
      <p>Coming Soon</p>
      <DarkToggle />
    </main>
  );
}
