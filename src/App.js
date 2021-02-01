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

function App() {
    return (
        <div className={"container-fluid px-0"}>
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <IndexApp />
                    </Route>
                    <Route path="/about-me">
                        <AboutMeApp />
                    </Route>
                    <Route path="/proficiency">
                        <ProficiencyApp />
                    </Route>
                    <Route>
                        <p>404</p>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
