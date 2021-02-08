import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import IndexApp from "./index/IndexApp";
import React from "react";
import "./stylesheet.scss";
import TestApp from "./test/TestApp";

function App() {
    return (
        <div className={"app__background"}>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={IndexApp}>
                    </Route>
                    <Route exact={true} path="/test" component={TestApp}>
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
