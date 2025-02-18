import Reports from "@/components/holds_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Holds Report",
  description:
    "This is Holds Report of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Holds Report" />
      { <Reports /> }
    </div>
  );
}