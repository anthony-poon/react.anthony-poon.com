import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./stylesheet.scss"
import {motion} from "framer-motion";
import DynamicBackground from "./background/DynamicBackground";
import AboutMe from "./about-me/AboutMe";
import Proficiency from "./proficiency/Proficiency";
import {HeroImage} from "./hero-image/HeroImage";
import {ParallaxContainer} from "./components/parallax";

class IndexApp extends React.Component {
    state = {
        observing: "hero"
    }
    render() {
        const {
            observing
        } = this.state;
        console.log(observing);
        return (
            <div
                className={"index__container"}
            >
                <DynamicBackground
                    observing={observing}
                />
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
                        <ParallaxContainer
                            initialInView={true}
                            onObserve={() => this.setState({ observing: "hero" })}
                        >
                            <HeroImage
                                inView={ observing === "hero" }
                            />
                        </ParallaxContainer>
                        <ParallaxContainer
                            onObserve={() => this.setState({ observing: "about-me-padding" })}
                        >
                            <div className={"observation__padding"}/>
                        </ParallaxContainer>
                        <ParallaxContainer
                            onObserve={() => this.setState({ observing: "about-me" })}
                        >
                            <AboutMe/>
                        </ParallaxContainer>
                        <ParallaxContainer
                            onObserve={() => this.setState({ observing: "proficiency" })}
                        >
                            <Proficiency/>
                        </ParallaxContainer>
                    </div>
                </motion.div>

            </div>
        );
    }
}

export default IndexApp;