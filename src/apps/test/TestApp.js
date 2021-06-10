import React from "react"
import {Link} from "react-router-dom";
import "./stylesheet.scss";
import FadeTestView from "./FadeTestView";
import ObserverTestView from "./ObserverTestView";
import {FadeLeftRoute, RouteTransition} from "../../share/components/animations/route-transition";
import PageTransitionTestView from "./PageTransitionTestView";

const TestApp = () => {
    return (
        <div className={"container-fluid"}>
            <div className={"py-3"}>
                <Link to={"/test/fade"} className={"btn btn-link mr-3"}>Fade Animation</Link>
                <Link to={"/test/observer"} className={"btn btn-link mr-3"}>Intersection Observer</Link>
                <Link to={"/test/page"} className={"btn btn-link mr-3"}>Page Transition</Link>
            </div>
            <RouteTransition>
                <FadeLeftRoute path={"/test/fade"}>
                    <FadeTestView/>
                </FadeLeftRoute>
                <FadeLeftRoute path={"/test/observer"}>
                    <ObserverTestView/>
                </FadeLeftRoute>
                <FadeLeftRoute path={"/test/page"}>
                    <PageTransitionTestView/>
                </FadeLeftRoute>
            </RouteTransition>
        </div>

    );
}

export default TestApp;