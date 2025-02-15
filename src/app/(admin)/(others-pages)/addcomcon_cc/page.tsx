import AddComCon from "@/components/addcomcon_cc/AddComCon";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add School-School",
  description:
    "This is Add Schools page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Community Contacts" />
      { <AddComCon /> }
    </div>
  );
}
