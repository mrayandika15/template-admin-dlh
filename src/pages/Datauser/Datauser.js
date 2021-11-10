import React from "react";

import { ListTable, Navbar } from "../../containers";
import { DashboardLayout } from "../../layouts";

export const Datauser = () => {
  return (
    <DashboardLayout>
      <Navbar header="Data User" />
      <ListTable />
    </DashboardLayout>
  );
};
