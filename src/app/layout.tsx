
import { Outfit } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
// import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import authOptions from "@/lib/authOptions"; // Create this file (see step 2)
// import { redirect } from "next/navigation";
// import SessionWrapper from "@/components/auth/SessionWrapper"; // ✅ Import the new wrapper

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession(authOptions);

  // // Allow access only to login and signup pages
  // const publicRoutes = ["/signup", "/"];
  // if (!session && !publicRoutes.includes(globalThis.window?.location?.pathname)) {
  //   redirect("/");
  // }
  return (
    <html lang="en">
      <body className={`${outfit.variable} dark:bg-gray-900`} style={{ fontFamily: 'Arial, San-Series' }}>
        {/* <SessionWrapper> */}
          <ThemeProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ThemeProvider>
        {/* </SessionWrapper> */}
      </body>
    </html>
  );
}
