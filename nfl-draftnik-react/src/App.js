import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import TestUsersGraphQLQuery from "./components/testing/TestUsersGraphQLQuery";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <NavBar/>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact/>
                        <PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/testUsersGraphQLQuery" component={TestUsersGraphQLQuery}/>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}
