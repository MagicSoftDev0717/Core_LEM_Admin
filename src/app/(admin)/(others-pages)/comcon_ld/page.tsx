import CommunityContacts from "@/components/comcon_ld/CommunityContacts";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add School-School",
  description:
    "This is Add Schools page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Community Contacts" />
      { <CommunityContacts /> }
    </div>
  );
}
