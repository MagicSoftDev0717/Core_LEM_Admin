import PayRec from "@/components/payrec_ac/PayRec";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Payment Reconciliation - Account",
  description:
    "This is Payment Reconciliation page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Payment Reconciliation" />
      { <PayRec /> }
    </div>
  );
}
