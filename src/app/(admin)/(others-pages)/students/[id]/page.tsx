import Students from "@/components/students/Students";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Students",
  description:
    "This is Students page of Admin",
};
export default async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return (
    <div>
      <PageBreadcrumb pageTitle="Individual Students Management" />
      { <Students id = {id}/> }
    </div>
  );
}