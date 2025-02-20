import JobBoard from "@/components/jobboard_bs/JobBoard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Job Board Manager- Business",
  description:
    "This is Job Board  page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Job Board Manager" />
      { <JobBoard /> }
    </div>
  );
}