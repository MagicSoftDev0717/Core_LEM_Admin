import Membership from "@/components/member_ac/Membership";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Membership Setup - Report",
  description:
    "This is Membership page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Membership Setup" />
      { <Membership /> }
    </div>
  );
}
