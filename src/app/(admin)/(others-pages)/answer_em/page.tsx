import Answer from "@/components/answer_em/Answer";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Answer Key - Employee",
  description:
    "This is Answer Key page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Answer Key" />
      { <Answer /> }
    </div>
  );
}
