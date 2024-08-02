import { Layout } from "@src/components/layout";
import { AccountsPage } from "@src/pages/accounts";
import { CashflowPage } from "@src/pages/cashflow";
import { DashboardPage } from "@src/pages/dashboard";
import { TransactionsPage } from "@src/pages/transactions";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "transactions",
        element: <TransactionsPage />
      },
      {
        path: "cashflow",
        element: <CashflowPage />
      },
      {
        path: "accounts",
        element: <AccountsPage />
      }
    ]
  }
]);
