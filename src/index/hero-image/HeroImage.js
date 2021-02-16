import React from "react"
import {ReactComponent as Mouse} from "../images/mouse.svg";
import {ReactComponent as DownArrow} from "../images/down-arrow.svg";
import {motion} from "framer-motion";
import "./stylesheet.scss";

export const HeroImage = () => {
    const fadeLeft = {
        "in": {
            x: 0,
            opacity: 1
        },
        "out": {
            x: -40,
            opacity: 0
        },
    }
    const fadeRight = {
        "in": {
            x: 0,
            opacity: 1
        },
        "out": {
            x: 40,
            opacity: 0
        },
    }
    const fadeOut = {
        "in": {
            opacity: 1
        },
        "out": {
            opacity: 0
        },
    }
    return (
        <div
            className={"hero__container"}>
            <div className={"hero__display-text"}>
                <motion.div
                    variants={fadeLeft}
                    className={"display-text__1"}
                >I am a </motion.div>
                <motion.div
                    variants={fadeRight}
                    className={"display-text__2"}
                >Full Stack Developer</motion.div>
            </div>
            <motion.div
                variants={fadeOut}
                className={"hero__display-bottom"}
            >
                <Mouse className={"hero__mouse-icon"}/>
                <DownArrow className={"hero__arrow-icon"}/>
            </motion.div>
        </div>
    )
}