import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CheckoutPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <p className="mt-2 text-gray-500">You are signed in. This route is protected by Clerk.</p>
    </main>
  );
}
