import Employees from "@/components/employees/Employees";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Employees",
  description:
    "This is Employees page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Employee Management" />
      { <Employees /> }
    </div>
  );
}
