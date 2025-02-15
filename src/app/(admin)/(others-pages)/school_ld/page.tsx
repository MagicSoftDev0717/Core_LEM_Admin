import School from "@/components/school_ld/School";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | School-Lead",
  description:
    "This is School page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Schools" />
      { <School /> }
    </div>
  );
}
