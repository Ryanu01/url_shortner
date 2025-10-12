import { createRoot } from 'react-dom/client';
import './index.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider, createRouter} from "@tanstack/react-router"
import {routeTree} from './routing/routeTree'
const querClient = new QueryClient();

const router = createRouter({routeTree})
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={querClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
)
