import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Ensure Prisma is correctly set up
// const prisma = new PrismaClient();
interface UserType {
    id: string;
    name: string | null;
    email: string;
    image?: string | null;
}


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                
                if (!user || !user.password) {  
                    throw new Error("Invalid email or password");
                }

                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password || ""); 

                if (!isPasswordCorrect) {
                    throw new Error("Invalid email or password");
                }

                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user as UserType;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as UserType;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};
