import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./stylesheet.scss"
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import DynamicBackground from "./background/DynamicBackground";

const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
}
class IndexApp extends React.Component {
    render() {
        return (
            <motion.div
                className={"index__container container-fluid"}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                <DynamicBackground/>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 5
                    }}
                    className={"overlay__container"}
                >
                    <div className={"overlay__header pt-3 pt-md-5 px-md-5"}>
                        <span className={"overlay-header__name"}>Anthony Poon</span>
                        <span className={"overlay-header__icon-group"}>
                        <div className={"overlay-header__icon"}>
                            <GitHubIcon/>
                        </div>
                        <div className={"overlay-header__icon"}>
                            <LinkedInIcon/>
                        </div>
                    </span>
                    </div>
                    <div className={"content__wrapper"}>
                        <div className={"content__hero"}>
                            <div className={"hero__display-text-1"}>I am a </div>
                            <div className={"hero__display-text-2"}>Full Stack Developer</div>
                        </div>
                        <div className={"content__footer container"}>
                            <div className={"row"}>
                                <div className={"col-md-3 col-12"}>
                                    <Link className={"content__footer-link"} to={"/about-me"}>
                                        <span className={"content__footer-bullet"}> 01 </span>
                                        About Me
                                    </Link>
                                </div>
                                <div className={"col-md-3 col-12"}>
                                    <Link className={"content__footer-link"}  to={"/proficiency"}>
                                        <span className={"content__footer-bullet"}> 02 </span>
                                        Proficiency
                                    </Link>
                                </div>
                                <div className={"col-md-3 col-12"}>
                                    <Link className={"content__footer-link"} to={"/my-work"}>
                                        <span className={"content__footer-bullet"}> 03 </span>
                                        My Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        );
    }
}

export default IndexApp;