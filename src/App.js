import "./App.css";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import FindATherapist from "./FindATherapist";
import Portal from "./Portal";
import GriefTalkBlog from "./GriefTalkBlog";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key!");
}
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },

        {
            path: "/FindATherapist",
            element: <FindATherapist />,
        },

        // Clerk specific routes
        {
            path: "/sign-in/*",
            element: <SignIn routing="path" path="/sign-in" />,
        },
        {
            path: "/sign-up/*",
            element: <SignUp routing="path" path="/sign-up" />,
        },
        {
            path: "/Portal",
            element: <Portal />,
        },
        {
            path: "/GriefTalkBlog",
            element: <GriefTalkBlog />,
        },
    ]);
    return (
        <ClerkProvider
            publishableKey={clerkPublishableKey}
            navigate={(to) => router.navigate(to)}
        >
            <div className="App container">
                <RouterProvider router={router} />
            </div>
        </ClerkProvider>
    );
}

export default App;
