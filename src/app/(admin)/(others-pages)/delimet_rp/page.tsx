import Reports from "@/components/delimet_rp/Reports";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Delivery Method Report",
  description:
    "This is Enfollment Report of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Delivery Method Report" />
      { <Reports /> }
    </div>
  );
}