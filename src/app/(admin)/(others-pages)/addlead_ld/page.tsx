import AddLead from "@/components/addlead_ld/AddLead";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add Lead",
  description:
    "This is Ado Lead page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Lead" />
      { <AddLead /> }
    </div>
  );
}
