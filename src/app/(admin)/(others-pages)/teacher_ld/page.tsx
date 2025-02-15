import Teachers from "@/components/teacher_ld/Teachers";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Teacher-Leads",
  description:
    "This is Teachers page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Teachers" />
      { <Teachers /> }
    </div>
  );
}
