import Landing from "@/components/Landing/Landing";
import type { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title:
    "LEM Admin Panel Dashboard",
  description: "This is Dashboard for LEM Admin",
};


export default function page() {

  return (
    <body style={{ backgroundColor: 'white' }}>
      <Landing />
    </body>
  );
}
