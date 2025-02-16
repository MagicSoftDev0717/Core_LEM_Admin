import PaymentMethod from "@/components/paymethod_ad/PaymentMethod";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Payment Method - Account Details",
  description:
    "This is Payment Method page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Payment Method" />
      { <PaymentMethod /> }
    </div>
  );
}