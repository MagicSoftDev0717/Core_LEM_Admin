import Reports from "@/components/parent_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Parent Communication Report",
  description:
    "This is Parent Communication of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Parent Communication Report" />
      { <Reports /> }
    </div>
  );
}