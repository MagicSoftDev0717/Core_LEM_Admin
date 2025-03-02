import type { Metadata } from "next";
import React from "react";

import Dashboard from "@/components/Dashboard/Dashboard";
export const metadata: Metadata = {
  title:
    "LEM Admin Panel Dashboard",
  description: "This is Dashboard for LEM Admin",
};

export default function page() {

  return (
    <body style={{ backgroundColor: 'white' }}>
      <Dashboard />
    </body>
  );
}
