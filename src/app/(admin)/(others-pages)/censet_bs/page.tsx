import CentreSet from "@/components/censet_bs/CentreSet";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Centre Setting - Business",
  description:
    "This is LEM Board page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Centre Settings" />
      { <CentreSet /> }
    </div>
  );
}