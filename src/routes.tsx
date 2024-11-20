import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatBot from "./pages/chatbot/index";
import { Home } from "./pages/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chatbot",
    element: <ChatBot />,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export function Navigation() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}
