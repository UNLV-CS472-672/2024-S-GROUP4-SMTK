import Link from "next/link";

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="font-sans text-4xl">
          This is a test page.
        </h1>
        <Link href='/'>Go back</Link>
      </div>
    </main>
  );
}
