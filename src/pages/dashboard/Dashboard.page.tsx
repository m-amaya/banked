import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard | Banked</title>
      </Helmet>
      <AppShell.Main>Dashboard Page</AppShell.Main>
    </>
  );
}
