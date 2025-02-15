import Details from "@/components/detail_ac/Details";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Detail-Account",
  description:
    "This is Accoun Detail page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Account Details" />
      { <Details /> }
    </div>
  );
}
