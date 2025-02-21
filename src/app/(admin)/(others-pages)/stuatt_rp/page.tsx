import AttendanceReport from "@/components/stuatt_rp/AttendanceReport";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Student Attendance - Report",
  description:
    "This is Student Attendance page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Student Attendance Report" />
      { <AttendanceReport /> }
    </div>
  );
}
