import Attendance from "@/components/attendance_stu/Attendance";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Student Attendance",
  description:
    "This is Attendance page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Student Attendance" />
      { <Attendance /> }
    </div>
  );
}
