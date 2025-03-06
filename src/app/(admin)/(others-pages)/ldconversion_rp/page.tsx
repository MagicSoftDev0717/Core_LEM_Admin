import Reports from "@/components/ldconversion_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Lead Roster Reports",
  description:
    "This is Lead Roster Reports page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lead Conversion Reports" />
      { <Reports /> }
    </div>
  );
}
