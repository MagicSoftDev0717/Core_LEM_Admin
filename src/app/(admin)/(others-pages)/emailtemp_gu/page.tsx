import EmailTemp from "@/components/emailtemp_gu/EmailTemp";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Email Template - Guardians",
  description:
    "This is Email Template page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Email Templates" />
      { <EmailTemp /> }
    </div>
  );
}
