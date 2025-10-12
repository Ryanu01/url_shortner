import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import AuthPage from "../pages/AuthPage";
import DashBoardPage from "../pages/DashBoardPage";

export const dashboardRouute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashBoardPage 
})