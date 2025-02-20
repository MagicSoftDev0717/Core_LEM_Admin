import Ratio from "@/components/ratio_em/Ratio";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Attendance Ratio - Chart",
  description:
    "This is Ratio Chart page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Attendance Ratio Chart" />
      { <Ratio /> }
    </div>
  );
}
