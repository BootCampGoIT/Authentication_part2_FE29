import React, {lazy} from 'react';


export default [
    {
        path: "/",
        name: "Home",
        exact: true,
        private: false,
        component: (() => <h2>Home</h2>)
    },
    {
        path: "/signin",
        name: "SignIn",
        exact: true,
        private: false,
        component: lazy(() => import('../auth/authForm/AuthForm')),
    },
    {
        path: "/signup",
        name: "SignUp",
        exact: true,
        private: false,
        component: lazy(() => import('../auth/registrationForm/RegistrationForm'))
    },
    {
        path: "/todo",
        name: "Todo",
        exact: true,
        private: true,
        component: lazy(() => import('../todo/Todo'))
    },
    {
        path: "/profile",
        name: "Profile",
        exact: true,
        private: true,
        component: (() => <h2>Profile</h2>)
    }
];