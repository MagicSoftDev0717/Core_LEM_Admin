import PlanManager from "@/components/planmanager_stu/PlanManager";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Plan Manager",
  description:
    "This is Plan Manger page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Learning Plan Manager" />
      { <PlanManager /> }
    </div>
  );
}
