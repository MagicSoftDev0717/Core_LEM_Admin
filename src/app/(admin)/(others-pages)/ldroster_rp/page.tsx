import Reports from "@/components/ldroster_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Lead Roster Report",
  description:
    "This is Reports page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lead Roster Report" />
      { <Reports /> }
    </div>
  );
}
