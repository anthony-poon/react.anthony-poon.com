import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import IndexApp from "./index/IndexApp";
import React from "react";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <IndexApp />
                </Route>

                <Route>
                    <p>404</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
