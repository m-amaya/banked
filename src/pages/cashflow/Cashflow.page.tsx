import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function CashflowPage() {
  return (
    <>
      <Helmet>
        <title>Cashflow | Banked</title>
      </Helmet>
      <AppShell.Main>Cashflow Page</AppShell.Main>
    </>
  );
}
