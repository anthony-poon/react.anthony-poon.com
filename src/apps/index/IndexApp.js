import React from "react"
import "./stylesheet.scss"
import HeroView from "./components/HeroView";


const IndexApp = () => {
    return (
        <div className={"index-app__content"}>
            <HeroView/>
        </div>
    );
}

export default IndexApp;