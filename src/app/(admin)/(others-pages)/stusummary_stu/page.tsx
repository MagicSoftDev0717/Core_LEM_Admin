import StuSummary from "@/components/stusummary_stu/StuSummary";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Summary Chart",
  description:
    "This is Summary Chart page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Student Attendance Summary Charts" />
      { <StuSummary /> }
    </div>
  );
}