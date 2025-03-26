import { schema } from "@/lib/schema";
import prisma from "@/lib/prisma";
import { executeAction } from "@/lib/executeAction";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const confirm = formData.get("confirm");
      if(confirm === password) {
        const validatedData = schema.parse({ email, password });
        await prisma.user.create({
          data: {
            email: validatedData.email.toLocaleLowerCase(),
            password: validatedData.password,
          },
        });
      }
    },
    successMessage: "Signed up successfully",
  });
};

export { signUp };
