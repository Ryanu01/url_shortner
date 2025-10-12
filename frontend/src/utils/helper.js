import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api.js";
import { login } from "../store/slice/authSlice.js";

export const checkAuth = async ({ context }) => {
    try {
        const {queryClient, store} = context;

        const user = await queryClient.ensureQueryData({  // Add await here
            queryKey: ['currentUser'],
            queryFn: getCurrentUser,
        });
        console.log("User from API:", user); 
        
        if(!user) return redirect({ to: "/auth" });  // Redirect if no user
         console.log("Dispatching login with:", user);  // Debug
        store.dispatch(login(user))
        const {isAuthenticated} = store.getState().auth
        console.log("isAuthenticated:", isAuthenticated);  // 
        if(!isAuthenticated) return redirect({ to: "/auth" });  // Redirect if not authenticated

        return true;
    } catch (error) {
        return redirect({ to: "/auth" })
    }
}