import YearBulk from "@/components/yearbulk_stu/YearBulk";
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
      <PageBreadcrumb pageTitle="School Year Bulk Update" />
      { <YearBulk /> }
    </div>
  );
}