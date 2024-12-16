import React from "react";
import SideNav from "../ui/SideNav";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default DashboardLayout;
