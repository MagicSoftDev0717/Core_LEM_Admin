import Reports from "@/components/leadtrack_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Lead Tracking Reports",
  description:
    "This is Lead Tracking page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lead Tracking Reports" />
      { <Reports /> }
    </div>
  );
}
