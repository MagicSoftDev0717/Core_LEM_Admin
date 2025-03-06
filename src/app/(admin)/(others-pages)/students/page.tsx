import Students from "@/components/students/Students";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Students",
  description:
    "This is Students page of Admin",
};
export default function page() {

  return (
    <div>
      <PageBreadcrumb pageTitle="Students Management" />
      { <Students id={-1}/> }
    </div>
  );
}