import TimeSheet from "@/components/timesheet_em/TimeSheet";
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
      <PageBreadcrumb pageTitle="Employee TimeSheets" />
      { <TimeSheet /> }
    </div>
  );
}
