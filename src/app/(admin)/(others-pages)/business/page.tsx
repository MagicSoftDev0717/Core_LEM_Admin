import Business from "@/components/business/Business";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Business",
  description:
    "This is Business page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Curriculum Search" />
      { <Business /> }
    </div>
  );
}
