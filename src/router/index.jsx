import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../conditions/ProtectedRoute";
import Acceuil from "../pages/Acceuil";
import APropos from "../pages/Aprops";
import DomaineServic from "../pages/DomainesService";
import Contacts from "../pages/Contact";
import Equipe from "../pages/Equipe";

import RendezVousForm from "../component/FormulaireRendez";
import PublicationsFeed from "../component/Publication";
import AuthProtected from "../conditions/AuthProtected";

import LoginForm from "../auth/login";
import Register from "../auth/Register";



export const router = createBrowserRouter([

    {
        path: "/",
        element: (

            <Acceuil />

        ),
    },
    {
        path: "a-propos",
        element: (

            <APropos />

        ),
    },
    {
        path: "domaine",
        element: (

            <DomaineServic />

        ),
    },
    {
        path: "contact",
        element: (

            <Contacts />

        ),
    },
    {
        path: "equipe",
        element: (

            < Equipe />

        ),
    },
    {
        path: "rendez-vous",
        element: (
            
                <RendezVousForm />
            
        ),
    },
    {
        path: "publication",
        element: (

            <PublicationsFeed />

        ),
    },
    {
        path: "login",
        element: (
            <AuthProtected>
                <LoginForm />
            </AuthProtected>
        ),
    },
    {
        path: "register",
        element: (
            <AuthProtected>
                <Register />
            </AuthProtected>
        ),
    }




])