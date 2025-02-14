import Guardians from "@/components/guardians/Guardians";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Guardians",
  description:
    "This is Guardians page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Guardian Management" />
      { <Guardians /> }
    </div>
  );
}
