import Reports from "@/components/workout_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Digital Workout Plan Report",
  description:
    "This is Enfollment Report of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Digital Workout Plan Report" />
      { <Reports /> }
    </div>
  );
}