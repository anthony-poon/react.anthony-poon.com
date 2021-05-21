import React from "react"
import {Link} from "react-router-dom";
import "./stylesheet.scss";
import FadeTestView from "./FadeTestView";
import ObserverTestView from "./ObserverTestView";
import {FadeLeftPage, PageTransition} from "../../share/components/animations/page-transition";

const TestApp = () => {

    return (
        <div className={"container-fluid"}>
            <div className={"py-3"}>
                <Link to={"/test/fade"} className={"btn btn-link mr-3"}>Fade Animation</Link>
                <Link to={"/test/observer"} className={"btn btn-link mr-3"}>Intersection Observer</Link>
            </div>
            <PageTransition>
                <FadeLeftPage path={"/test/fade"}>
                    <FadeTestView/>
                </FadeLeftPage>
                <FadeLeftPage path={"/test/observer"}>
                    <ObserverTestView/>
                </FadeLeftPage>
            </PageTransition>
        </div>

    );
}

export default TestApp;