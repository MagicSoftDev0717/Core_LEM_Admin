import EnrollOpportunity from "@/components/enrolloppo_ac/EnrollOpportunity";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Enrollment Opportunity Dashboard - Account",
  description:
    "This is Enrolk Dashboard page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Enrollment Opportunity Dashboard" />
      { <EnrollOpportunity /> }
    </div>
  );
}
