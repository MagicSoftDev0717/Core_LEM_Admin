import Reports from "@/components/stubir_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Student Birthday Plan Report",
  description:
    "This is Student Birthday Report of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Student Birthday Report" />
      { <Reports /> }
    </div>
  );
}