import Reports from "@/components/billing_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Billing Expections Report",
  description:
    "This is Billing Exceptions of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Billing Exceptions Report" />
      { <Reports /> }
    </div>
  );
}