import AddStudent from "@/components/addstudent_stu/AddStudent";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add Student-Student",
  description:
    "This is Add Student page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Student" />
      { <AddStudent /> }
    </div>
  );
}
