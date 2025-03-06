import Mathnasium from "@/components/lem_bs/Mathnasium";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | LEM Board- Business",
  description:
    "This is LEM Board page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="LEM Job Board" />
      { <Mathnasium /> }
    </div>
  );
}