import Reports from "@/components/school_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | School Report",
  description:
    "This is School Report of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="School Report" />
      { <Reports /> }
    </div>
  );
}