import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Main from "./components/Main";
import TextAnswer from "./components/TextAnswer";
import {Video} from "lucide-react";
import VideoAnswer from "./components/VideoAnswer";
import ImageAnswer from "./components/ImageAnswer";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Main></Main>
        ),
    },
    {
        path: "answer",
        element: <TextAnswer/>,
    },
    {
        path: "video",
        element: <VideoAnswer/>,
    },
    {
        path: "image",
        element: <ImageAnswer/>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);