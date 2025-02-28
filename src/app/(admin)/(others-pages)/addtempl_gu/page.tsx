import Template from "@/components/addtempl_gu/Template";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add Template - Guardians",
  description:
    "This is Add Template page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Template" />
      { <Template /> }
    </div>
  );
}
