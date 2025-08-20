import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-8">
      <SignUp />
    </main>
  );
}
