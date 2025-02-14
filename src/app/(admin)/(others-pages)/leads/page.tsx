import Leads from "@/components/leads/Leads";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Leads",
  description:
    "This is Leads page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Lead Management" />
      { <Leads /> }
    </div>
  );
}
