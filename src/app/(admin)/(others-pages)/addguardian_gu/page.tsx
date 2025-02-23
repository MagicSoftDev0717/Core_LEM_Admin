import AddGuardian from "@/components/addguardian_gu/AddGuardian";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add Guardian - Account",
  description:
    "This is Add Guardian page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Guardian" />
      { <AddGuardian /> }
    </div>
  );
}
