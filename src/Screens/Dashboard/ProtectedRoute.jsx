"use client";

import DashboardGuard from "./Dashboard";

export const PrivateRoute = ({ children }) => {
  return <DashboardGuard>{children}</DashboardGuard>;
};

export default PrivateRoute;
