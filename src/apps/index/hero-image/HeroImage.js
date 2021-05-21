import React from "react"
import {ReactComponent as Mouse} from "../images/mouse.svg";
import {ReactComponent as DownArrow} from "../images/down-arrow.svg";
import {motion} from "framer-motion";
import "./stylesheet.scss";
import {FadeLeft, FadeOut, FadeRight} from "../../../share/components/animations/fade";

export const HeroImage = () => {
    return (
        <div
            className={"hero__container"}>
            <div className={"hero__display-text"}>
                <FadeLeft
                    className={"display-text__1"}
                >I am a </FadeLeft>
                <FadeRight
                    className={"display-text__2"}
                >Full Stack Developer</FadeRight>
            </div>
            <FadeOut
                className={"hero__display-bottom"}
            >
                <Mouse className={"hero__mouse-icon"}/>
                <DownArrow className={"hero__arrow-icon"}/>
            </FadeOut>
        </div>
    )
}