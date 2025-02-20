import AssessPrint from "@/components/assessprint_bs/AssessPrint";
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
      <PageBreadcrumb pageTitle="Assessment for Printing" />
      { <AssessPrint /> }
    </div>
  );
}