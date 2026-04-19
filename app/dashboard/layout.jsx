import DashboardGuard from "../../src/Screens/Dashboard/Dashboard";

export const metadata = { title: "Dashboard — CYON ADC" };

export default function DashboardLayoutRoute({ children }) {
  return <DashboardGuard>{children}</DashboardGuard>;
}
