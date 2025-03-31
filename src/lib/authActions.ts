"use server";

import { signUp } from "@/lib/actions";
import { redirect } from "next/navigation";

export async function handleSignUp(prevState: any, formData: FormData) {
  try {
    const res = await signUp(formData);

    if (res.success) {
      redirect("/sign-in");
    }

    return { error: res.error || "Sign-up failed. Please try again." };
  } catch (error) {
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
