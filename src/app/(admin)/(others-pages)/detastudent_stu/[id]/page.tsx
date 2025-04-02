import DetailStudent from "@/components/detastudent_stu/DetailStudent";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Student Detail-Lead",
  description:
    "This is Student Detail page of Admin",
};
export default async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return (
    <div>
      <PageBreadcrumb pageTitle="Student Details" />
      { <DetailStudent id={id} /> }
    </div>
  );
}
