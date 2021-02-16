import React from "react";
import { motion } from "framer-motion";
import {ReactComponent as AboutMeFullStack} from "./images/about-me-full-stack.svg";
import {ReactComponent as AboutMeEdu} from "./images/about-me-edu.svg";
import {ReactComponent as AboutMeMobile} from "./images/about-me-app.svg";
import {ReactComponent as AboutMeCV} from "./images/about-me-cv-2.svg";
import "./stylesheet.scss";

const slides = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab consectetur corporis delectus deserunt
            exercitationem in ipsum iste itaque, iure labore maxime necessitatibus optio quaerat, quasi reiciendis
            voluptas. Deserunt, molestiae.`,
    `Aspernatur atque maiores possimus repellendus. Architecto explicabo illum nihil pariatur saepe tenetur
            totam, voluptates. Accusamus assumenda distinctio est facere facilis fuga fugiat id laudantium neque
            perferendis quisquam rerum, sed unde.`,
    `Beatae culpa et odit quas voluptatibus! Accusamus alias animi architecto assumenda culpa deserunt
            distinctio esse ex expedita impedit iste minima nihil, nisi numquam saepe unde voluptatem. Animi
            mollitia nihil officiis.`,
    `Ad aliquid amet impedit in incidunt inventore iste libero magni, maxime molestias, nesciunt omnis quam
            saepe. Aliquid commodi facilis fugit minima modi, nam odit, reiciendis sequi tenetur unde, voluptatem
            voluptates.`,
    `Accusantium animi cum cupiditate distinctio ducimus error ipsa ipsum laboriosam laudantium molestiae
            nemo placeat, quae qui quis sed soluta vero voluptate. Consequatur eligendi minima nihil tenetur
            voluptas? Alias, id nobis.`,
]
const slideIcons = [
    AboutMeFullStack,
    AboutMeEdu,
    AboutMeMobile,
    AboutMeCV
];

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