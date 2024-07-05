import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/Login";
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
import Messages from "../pages/caretaker/messages/messages";
import InformationQueue from "../pages/caretaker/information-queue/InformationQueue";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifiyCode from "../pages/auth/VerifyCode";
import NewPassword from "../pages/auth/NewPassword";
import Doctors from "../pages/caretaker/doctors/Doctors";
import Doctor from "../pages/caretaker/doctors/Doctor";
import Patients from "../pages/caretaker/patients/Patients";
import Patient from "../pages/caretaker/patients/Patient";
import Agenda from "../pages/caretaker/agenda/Agenda";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/verify-code",
    element: <VerifiyCode />
  },
  {
    path: "/new-password",
    element: <NewPassword />
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
        path: "/diagnostics",
        element: <Diagnostics />
      },
      {
        path: "/diagnostics/:id",
        element: <Diagnostic />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/users/:id",
        element: <User />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />
      },
      {
        path: "/motives",
        element: <Motives />
      },
      {
        path: "/statistics-indicators",
        element: <StatisticsIndicators />
      },
      {
        path: "/lite-accounting",
        element: <LiteAccounting />
      },
      {
        path: "/messages",
        element: <Messages />
      },
      {
        path: "/Information-queue",
        element: <InformationQueue />
      },
      {
        path: "/doctors",
        element: <Doctors />
      },
      {
        path: "/doctors/:id",
        element: <Doctor />
      },
      {
        path: "/patients",
        element: <Patients />
      },
      {
        path: "/patients/:id",
        element: <Patient />
      },
      {
        path: "/agenda",
        element: <Agenda />
      },
    ]
  }
])