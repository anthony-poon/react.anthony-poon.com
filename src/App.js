import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import IndexApp from "apps/index/IndexApp";
import React from "react";
import "./stylesheet.scss";
import TestApp from "apps/test/TestApp";
import {FadeOutPage, PageTransition} from "./share/components/animations/page-transition";

function App() {
    return (
        <div className={"app__background"}>
            <Router>
                <PageTransition>
                    <FadeOutPage exact={true} path="/">
                        <IndexApp/>
                    </FadeOutPage>
                    <FadeOutPage path="/test">
                        <TestApp/>
                    </FadeOutPage>
                    <FadeOutPage>
                        <p>404</p>
                    </FadeOutPage>
                </PageTransition>
            </Router>
        </div>
    );
}

export default App;
