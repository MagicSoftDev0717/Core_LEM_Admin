import PayMethod from "@/components/paymethod_ld/PayMethod";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Payment Method-Lead",
  description:
    "This is Payment Method page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Payment Method" />
      { <PayMethod /> }
    </div>
  );
}