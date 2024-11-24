import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux'; // Import Provider
import { store } from '/src/store/Store.jsx';// Import the Redux store
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App.jsx";
import "./index.css";

const clientId = '748494512618-8h927ht26mm1lj6mr4q24k4ck9kjd9mq.apps.googleusercontent.com';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
  <Provider store={store}>
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
  </Provider>
  </GoogleOAuthProvider>
);
