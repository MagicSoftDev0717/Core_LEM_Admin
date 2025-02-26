import Details from "@/components/details_ld/Details";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Detail-Lead",
  description:
    "This is Lead Details page of Admin",
};
export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <PageBreadcrumb pageTitle="Leads Details" />
      { <Details id={id} /> }
    </div>
  );
}