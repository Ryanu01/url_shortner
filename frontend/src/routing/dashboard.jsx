import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import AuthPage from "../pages/AuthPage";
import DashBoardPage from "../pages/DashBoardPage";
import { checkAuth } from "../utils/helper.js";

export const dashboardRouute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashBoardPage,
    beforeLoad: checkAuth
})