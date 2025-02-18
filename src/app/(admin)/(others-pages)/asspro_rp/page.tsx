import Reports from "@/components/asspro_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Assess Pro Report",
  description:
    "This is Asses Progress of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Assessment Progress Report" />
      { <Reports /> }
    </div>
  );
}