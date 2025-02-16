import Enrollment from "@/components/enrollment_ad/Enrollment";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Enrollment - Account Details",
  description:
    "This is Enrollment Detail page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Enrollment" />
      { <Enrollment /> }
    </div>
  );
}