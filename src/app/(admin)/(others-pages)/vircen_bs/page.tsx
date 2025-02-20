import VirtualCenter from "@/components/vircen_bs/VirtualCenter";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Virtual Center - Business",
  description:
    "This is Virtual Center  page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="VirtualCenter Manager" />
      { <VirtualCenter /> }
    </div>
  );
}