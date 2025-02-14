import Activities from "@/components/activities/Activities";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Activities",
  description:
    "This is Activities page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Activities" />
      { <Activities /> }
    </div>
  );
}
