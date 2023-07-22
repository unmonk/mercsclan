import { DarkToggle } from "@/components/DarkToggle";
import MercsLogo from "@/components/ui/mercslogo";
import MercsWordmark from "@/components/ui/mercswordmark";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1 className="text-xl text-primary font-bold">Mercs</h1>
      <p>Coming Soon</p>
      <div className="flex flex-row gap-4 my-2">
        <UserButton afterSignOutUrl="/" />
        <DarkToggle />
      </div>
      <Image
        src="/images/main.png"
        width={500}
        height={500}
        className="animate-pulse"
        alt="Mercs"
      />
    </main>
  );
}
