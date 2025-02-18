import Reports from "@/components/assess_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Assessment Report",
  description:
    "This is Assessment Report page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Assessment Report" />
      { <Reports /> }
    </div>
  );
}