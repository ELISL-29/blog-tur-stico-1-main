import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Results } from "../components/Results";
import { Register } from "../components/Register";
import { CreateDestination } from "../components/CreateDestination";
import { EditDestination } from "../components/EditDestination";
import {OtherDestinations} from "../components/OtherDestinations";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login
  },
  {
    path: '/results',
    Component: Results
  },
  {
    path: '/register',
    Component: Register
  },
  {
    path: '/create-destination',
    Component: CreateDestination
  },
  {
    path: '/edit-destination/:id',
    Component: EditDestination
  },
  {
    path: '/other-destination',
    Component: OtherDestinations
  }

]);