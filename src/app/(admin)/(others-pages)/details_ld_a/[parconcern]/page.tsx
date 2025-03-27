import Details_A from "@/components/details_ld_a/Details_a";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Detail-Lead",
  description:
    "This is Lead Details page of Admin",
};
export default async function page({ params }: { params: Promise<{ parconcern: string }> }) {
  const { parconcern } = await params;
  return (
    <div>
      <PageBreadcrumb pageTitle="Leads Details" />
      { <Details_A name={parconcern} /> }
    </div>
  );
}