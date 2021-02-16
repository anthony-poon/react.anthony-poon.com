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
                            className={"col about-me__lhs"}
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab consectetur corporis delectus deserunt
                                exercitationem in ipsum iste itaque, iure labore maxime necessitatibus optio quaerat, quasi reiciendis
                                voluptas. Deserunt, molestiae.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default AboutMe;