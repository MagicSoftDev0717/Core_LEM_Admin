import AddEmployee from "@/components/addemployee_em/AddEmployee";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add - Employee",
  description:
    "This is Add Employee page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Employee" />
      { <AddEmployee /> }
    </div>
  );
}
