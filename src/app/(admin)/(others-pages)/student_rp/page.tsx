import Reports from "@/components/student_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Student Report",
  description:
    "This is Student Report page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Students Report" />
      { <Reports /> }
    </div>
  );
}