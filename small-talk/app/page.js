import { Libre_Franklin } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-sans text-4xl">
          Small Talk App
        </h1>
        <Link href='/test'>Navigate to Test Page</Link>
      </div>
    </main>
  );
}
