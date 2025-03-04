import Dashboard from "@/components/dashboard/Dashboard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Dashboard",
  description:
    "This is Dashboard of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Dashboard" />
      { <Dashboard /> }
    </div>
  );
}