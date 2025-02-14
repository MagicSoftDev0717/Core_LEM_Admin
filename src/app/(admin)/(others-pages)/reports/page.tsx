import Reports from "@/components/reports/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Reports",
  description:
    "This is Reports page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lead Tracking Reports" />
      { <Reports /> }
    </div>
  );
}
