import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function AccountsPage() {
  return (
    <>
      <Helmet>
        <title>Accounts | Banked</title>
      </Helmet>
      <AppShell.Main>Accounts Page</AppShell.Main>
    </>
  );
}
