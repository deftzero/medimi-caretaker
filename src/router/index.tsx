import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
// import AppLayout from "../layout/Layout";
import Dashboard from "../pages/caretaker/dashboard/Dashboard";
import AppLayout from "../layout/Layout";
import Users from "../pages/caretaker/users/Users";
import User from "../pages/caretaker/users/User";
import Diagnostics from "../pages/caretaker/diagnostics/Diagnostics";
import Diagnostic from "../pages/caretaker/diagnostics/Diagnostic";
import Services from "../pages/caretaker/services/Services";
import ServiceDetails from "../pages/caretaker/services/Service";
import Motives from "../pages/caretaker/motives/Motives";
import StatisticsIndicators from "../pages/caretaker/statistic-indicators/StatisticsIndicators";
import LiteAccounting from "../pages/caretaker/lite-accounting/LiteAccounting";

export const router = createBrowserRouter([
  {
    path: "/login",
    index: true,
    element: <LoginPage />
  },
  {
    path: "/",
    element:
      <AppLayout>
        <Outlet />
      </AppLayout>,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        index: true,
        path: "/diagnostics",
        element: <Diagnostics />
      },
      {
        path: "/diagnostics/:id",
        element: <Diagnostic />
      },
      {
        index: true,
        path: "/users",
        element: <Users />
      },
      {
        path: "/users/:id",
        element: <User />
      },
      {
        index: true,
        path: "/services",
        element: <Services />
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />
      },
      {
        index: true,
        path: "/motives",
        element: <Motives />
      },
      {
        index: true,
        path: "/statistics-indicators",
        element: <StatisticsIndicators />
      },
      {
        index: true,
        path: "/lite-accounting",
        element: <LiteAccounting />
      },
    ]
  }
])