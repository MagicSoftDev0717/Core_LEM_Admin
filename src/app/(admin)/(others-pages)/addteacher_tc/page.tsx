import AddTeacher from "@/components/addteacher_tc/AddTeacher";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Add Teacher-Teacher",
  description:
    "This is Add Teachers page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Mentors" />
      { <AddTeacher /> }
    </div>
  );
}
