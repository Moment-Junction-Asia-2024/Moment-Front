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
import InquiriesDashboard from "./components/Inquiries";
import IncidentList from "./components/IncidentList";
import 'react-tooltip/dist/react-tooltip.css'
import KafkaChat from "./components/KafkaChat";
import 'react-toastify/dist/ReactToastify.css';
import DemoAnswer from "./components/DemoAnswer";
import DemoAnswer2 from "./components/DemoAnswer2";

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
        path: "inquiries",
        element: <InquiriesDashboard/>,
    },
    {
        path: "incidents",
        element: <IncidentList/>,
    },
    {
        path: "chat",
        element: <KafkaChat/>,
    },
    {
        path: "demo",
        element: <DemoAnswer/>,
    },
    {
        path: "demo2",
        element: <DemoAnswer2/>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);