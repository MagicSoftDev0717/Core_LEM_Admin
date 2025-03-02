import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title:
    "LEM Admin Panel Dashboard",
  description: "This is Dashboard for LEM Admin",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        {/* <EcommerceMetrics /> */}

        {/* <MonthlySalesChart /> */}
      </div>

      <div className="col-span-12 xl:col-span-5">
        {/* <MonthlyTarget /> */}
      </div>

      <div className="col-span-12">
        {/* <StatisticsChart /> */}
      </div>

      <div className="col-span-12 xl:col-span-5">
        {/* <DemographicCard /> */}
      </div>

      <div className="col-span-12 xl:col-span-7">
        {/* <RecentOrders /> */}
      </div>
    </div>
  );
}
