import Invoice from "@/components/invoice_ad/Invoice";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Invoice-Account Detail",
  description:
    "This is Invoice page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Invoice" />
      { <Invoice /> }
    </div>
  );
}
