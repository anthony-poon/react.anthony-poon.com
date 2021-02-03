import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import IndexApp from "./index/IndexApp";
import React from "react";
import "./stylesheet.scss";
import AboutMeApp from "./about-me/AboutMeApp";
import ProficiencyApp from "./proficiency/ProficiencyApp";
import { AnimatePresence } from "framer-motion";
import TestApp from "./test/TestApp";

function App() {
    return (
        <div className={"app__background"}>
            <Router>
                <Route
                    render={({ location }) => (
                        <AnimatePresence exitBeforeEnter>
                            <Switch  location={location} key={location.pathname}>
                                <Route exact={true} path="/" component={IndexApp}>
                                </Route>
                                <Route exact={true} path="/about-me" component={AboutMeApp}>
                                </Route>
                                {/*<Route exact={true} path="/proficiency" component={ProficiencyApp}>*/}
                                {/*</Route>*/}
                                <Route exact={true} path="/test" component={TestApp}>
                                </Route>
                                <Route>
                                    <p>404</p>
                                </Route>
                            </Switch>
                        </AnimatePresence>
                    )}>
                </Route>
            </Router>
        </div>
    );
}

export default App;
