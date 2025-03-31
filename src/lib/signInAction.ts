"use server";

import { signIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";

export async function handleSignIn(formData: FormData) {
  return executeAction({
    actionFn: async () => {
      await signIn("credentials", formData);
    },
  });
}
