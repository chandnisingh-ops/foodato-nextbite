import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-8">
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </main>
  );
}
