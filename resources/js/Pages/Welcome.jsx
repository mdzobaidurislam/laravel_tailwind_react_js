import App from "./../Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalContextProvider from "@/Contexts/GlobalContextProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
]);
export default function Welcome({
    canLogin,
    canRegister,
    laravelVersion,
    phpVersion,
}) {
    return (
        <GlobalContextProvider>
            <RouterProvider router={router} />
        </GlobalContextProvider>
    );
}
