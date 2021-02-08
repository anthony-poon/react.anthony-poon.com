import React from "react"
import {ReactComponent as Mouse} from "../images/mouse.svg";
import {ReactComponent as DownArrow} from "../images/down-arrow.svg";
import {motion} from "framer-motion";
import "./stylesheet.scss";

export const HeroImage = ({ inView }) => {
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
    const animate = inView ? "in" : "out";
    return (
        <div className={"hero__container"}>
            <motion.div
                animate={animate}
                variants={fadeLeft}
                className={"hero__display-text-1"}
            >I am a </motion.div>
            <motion.div
                animate={animate}
                variants={fadeRight}
                className={"hero__display-text-2"}
            >Full Stack Developer</motion.div>
            <motion.div
                animate={animate}
                variants={fadeOut}
                className={"hero__display-bottom"}
            >
                <Mouse className={"hero__mouse-icon"}/>
                <DownArrow className={"hero__arrow-icon"}/>
            </motion.div>
        </div>
    )
}