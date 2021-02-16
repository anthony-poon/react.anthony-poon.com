import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./stylesheet.scss"
import {motion} from "framer-motion";
import DynamicBackground from "./background/DynamicBackground";
import AboutMe from "./about-me/AboutMe";
import Proficiency from "./proficiency/Proficiency";
import {HeroImage} from "./hero-image/HeroImage";
import {Frame, Page} from "framer";
import {InView} from "react-intersection-observer";

const isTouchDevice = (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));

export const ParallaxContainer = ({children, onObserve, onExit, ...rest}) => {
    const fade = {
        "in": {
            opacity: 1,
        },
        "out": {
            opacity: 1,
        }
    }
    const defaultOptions = {
        rootMargin: "-25% 0% -25% 0%",
        threshold: 0,
        triggerOnce: false,
        initialInView: false
    }
    const options = Object.assign({}, defaultOptions, rest)
    return (
        <Frame
            height={"100%"}
            width={"100%"}
            background={"rgba(0,0,0,0)"}
        >
            <InView
                {...options}
                onChange={(inView, entry) => {
                    if (inView && onObserve) {
                        onObserve(entry)
                    } else if (onExit) {
                        onExit(entry)
                    }
                }}
            >
                {({ inView, ref, entries}) => (
                    <motion.div
                        ref={ref}
                        animate={inView ? "in" : "out"}
                        variants={fade}
                        className={"scroll-panel__page"}
                    >
                        {children}
                    </motion.div>
                )}
            </InView>
        </Frame>
    );
}

class IndexApp extends React.Component {
    state = {
        observing: "hero"
    }

    render() {
        const {
            observing
        } = this.state;
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
                        delay: 7
                    }}
                    className={"index__content"}
                >
                    <div className={"index__header pt-3 pt-md-5 px-md-5"}>
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
                    <div className={"index__scroll-panel"}>
                        <Page
                            width={"100vw"}
                            height={"100%"}
                            wheelEnabled={!isTouchDevice}
                            dragEnabled={isTouchDevice}
                            direction={"vertical"}
                        >
                            <ParallaxContainer
                                initialInView={true}
                                onObserve={() => this.setState({ observing: "hero" })}
                            >
                                <HeroImage/>
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
                        </Page>
                    </div>
                </motion.div>
            </div>
        );
    }
}

export default IndexApp;