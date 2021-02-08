import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./stylesheet.scss"
import {motion} from "framer-motion";
import DynamicBackground from "./background/DynamicBackground";
import AboutMe from "./about-me/AboutMe";
import Proficiency from "./proficiency/Proficiency";
import {ReactComponent as DownArrow} from "./images/down-arrow.svg";
import {ReactComponent as Mouse} from "./images/mouse.svg";
import {HeroImage} from "./hero-image/HeroImage";

class IndexApp extends React.Component {
    render() {
        return (
            <div
                className={"index__container"}
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
                        delay: 10
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
                    <div className={"index__content"}>
                        <HeroImage/>
                        <AboutMe/>
                        <Proficiency/>
                    </div>
                </motion.div>

            </div>
        );
    }
}

export default IndexApp;