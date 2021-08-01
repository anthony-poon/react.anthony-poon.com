import {
    BrowserRouter as Router
} from "react-router-dom";
import IndexApp from "apps/index/IndexApp";
import React from "react";
import "./stylesheet.scss";
import TestApp from "apps/test/TestApp";
import {FadeLeftRoute, RouteTransition} from "./share/components/animations/route-transition";
import MyProjectApp from "./apps/my-work/MyProjectApp";

function App() {
    return (
        <div className={"app__background"}>
            <Router>
                <RouteTransition>
                    <FadeLeftRoute exact={true} path="/">
                        <IndexApp/>
                    </FadeLeftRoute>
                    <FadeLeftRoute exact={true} path="/my-project">
                        <MyProjectApp/>
                    </FadeLeftRoute>
                    <FadeLeftRoute path="/test">
                        <TestApp/>
                    </FadeLeftRoute>
                    <FadeLeftRoute>
                        <p>404</p>
                    </FadeLeftRoute>
                </RouteTransition>
            </Router>
        </div>
    );
}

export default App;
