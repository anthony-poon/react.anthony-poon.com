import {
    BrowserRouter as Router
} from "react-router-dom";
import IndexApp from "apps/index/IndexApp";
import React from "react";
import "./stylesheet.scss";
import TestApp from "apps/test/TestApp";
import {FadeLeftRoute, RouteTransition} from "./share/components/animations/route-transition";

function App() {
    return (
        <div className={"app__background"}>
            <Router>
                <RouteTransition>
                    <FadeLeftRoute exact={true} path="/">
                        <IndexApp/>
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
