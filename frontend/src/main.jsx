import { createRoot } from 'react-dom/client';
import './index.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import App from './App.jsx'
const querClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={querClient}>
        <App />
    </QueryClientProvider>
)
