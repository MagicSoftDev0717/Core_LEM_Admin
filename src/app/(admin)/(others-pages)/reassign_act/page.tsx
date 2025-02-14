import Reassign from "@/components/reassign_act/Reassign";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Re-Assign",
  description:
    "This is Re-Assign page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Re-Assign All Activities" />
      { <Reassign /> }
    </div>
  );
}
