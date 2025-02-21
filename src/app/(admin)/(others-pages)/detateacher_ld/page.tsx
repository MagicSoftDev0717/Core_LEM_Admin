import DetailTeacher from "@/components/detateacher_ld/DetailTeacher";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Teacher Detail-Lead",
  description:
    "This is Teacher Detail page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Teacher Details" />
      { <DetailTeacher /> }
    </div>
  );
}
