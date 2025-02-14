import Roster from "@/components/roster_stu/Roster";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Roster",
  description:
    "This is Roster page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Students Roster" />
      { <Roster /> }
    </div>
  );
}