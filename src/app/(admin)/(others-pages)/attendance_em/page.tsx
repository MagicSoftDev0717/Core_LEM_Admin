import Attendance from "@/components/attendance_em/Attendance";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Employee Attendance Reports",
  description:
    "This is Employee Attendance page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Employee Attendance" />
      { <Attendance /> }
    </div>
  );
}
