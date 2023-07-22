import { DarkToggle } from "@/components/DarkToggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl text-primary font-bold">Mercs</h1>
      <p>Coming Soon</p>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <DarkToggle />
    </main>
  );
}
