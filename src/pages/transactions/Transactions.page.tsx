import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function TransactionsPage() {
  return (
    <>
      <Helmet>
        <title>Transactions | Banked</title>
      </Helmet>
      <AppShell.Main>Transactions Page</AppShell.Main>
    </>
  );
}
