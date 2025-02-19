import Instruction from "@/components/instruction_em/Instruction";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Instruction Manager Reports",
  description:
    "This is Instruction Manager page of Admin",
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Instruction Manager" />
      { <Instruction /> }
    </div>
  );
}
