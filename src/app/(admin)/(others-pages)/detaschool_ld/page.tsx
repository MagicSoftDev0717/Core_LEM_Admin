import DetailSchool from "@/components/detaschool_ld/DetailSchool";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | School Detail-Lead",
  description:
    "This is School Detail page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="School Details" />
      { <DetailSchool /> }
    </div>
  );
}
