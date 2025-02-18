import Reports from "@/components/referral_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Referral Reports",
  description:
    "This is Referral Reports page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Referral Reports" />
      { <Reports /> }
    </div>
  );
}
