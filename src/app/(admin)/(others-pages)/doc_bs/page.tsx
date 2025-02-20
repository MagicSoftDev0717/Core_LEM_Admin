import Document from "@/components/doc_bs/Document";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Timesheets - Employee",
  description:
    "This is Employee Timesheet page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Business Documents" />
      { <Document /> }
    </div>
  );
}