import RepoManager from "@/components/prorepo_gu/RepoManager";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Progress Report - Guardians",
  description:
    "This is Progress Report page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Progress Report Manager" />
      { <RepoManager /> }
    </div>
  );
}
