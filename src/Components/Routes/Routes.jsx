import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorElement from "../errorElement/ErrorElement";
import Home from "../Home/Home";
import Root from "../Root/Root";
import LiveTV from "../LiveTV/LiveTV";
import PredatorsTournament from "../PredatorsTournament/PredatorsTournament";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Contact from "../Contact/Contact";
import Jersey from "../Jersey/Jersey";
import ClubBulletin from "../ClubBulletin/ClubBulletin";
import Bulletin from "../ClubBulletin/Bulletin";
import AllPredators from "../AllPredators/AllPredators";
import TestingPurpose from "../TestingPurpose/TestingPurpose";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/livetv',
                element: <PrivateRouter><LiveTV /></PrivateRouter>
            },
            {
                path: '/predatorstournament',
                element: <PredatorsTournament />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/jersey',
                element: <Jersey />
            },
            {
                path: '/clubbulletin',
                element: <ClubBulletin />
            },
            {
                path: '/allpredators',
                element: <AllPredators />
            },
            {
                path: '/clubbulletin/:bId',
                element: <Bulletin />
            },
            {
                path: '/siyummaagi',
                element: <TestingPurpose />
            }
        ]
    },
]);

export default router;