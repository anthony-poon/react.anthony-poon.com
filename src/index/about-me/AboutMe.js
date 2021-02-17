import React from "react";
import { motion } from "framer-motion";
import "./stylesheet.scss";

const fade = {
    "in": {
        opacity: 1
    },
    "out": {
        opacity: 0
    }
}

class AboutMe extends React.Component {

    render() {
        return (
            <motion.div
                variants={fade}
                className={"content__about-me"}
            >
                <div className={"container"}>
                    <div className={"row"}>
                        <div
                            className={"col about-me__text"}
                        >
                            <p className={"mb-5"}>
                                Having both frontend and backend expertise, I am passionate in
                                creating responsive UI, good user experience and scalable service for web technology.
                                Started as a System Administrator, I studied part time for my Master
                                degree and programming. I graduated in 2018
                            </p>
                            <p>
                                I am currently working as a Web Developer in Hong Kong
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default AboutMe;