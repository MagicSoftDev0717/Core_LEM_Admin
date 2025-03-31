import DetailTeacher from "@/components/detateacher_ld/DetailTeacher";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Teacher Detail-Lead",
  description:
    "This is Teacher Detail page of Admin",
};
export  default async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return (
    <div>
      <PageBreadcrumb pageTitle="Mentor Details" />
      { <DetailTeacher id={id} /> }
    </div>
  );
}
