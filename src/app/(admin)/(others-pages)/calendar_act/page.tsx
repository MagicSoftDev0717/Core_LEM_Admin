import Calendar from "@/components/calendar_act/Calendar";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LEM Admin | Activities-Calendar",
  description:
    "This is Calendar page of Admin",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Calendar" />
      { <Calendar /> }
    </div>
  );
}
