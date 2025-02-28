import CurBatch from "@/components/curbatch_gu/CurBatch";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Current Batch - Guardians",
  description:
    "This is Current Batch page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Current Batch Details" />
      { <CurBatch /> }
    </div>
  );
}
