import React, {useEffect, useState} from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./stylesheet.scss"
import {motion, useAnimation} from "framer-motion";
import DynamicBackground from "./background/DynamicBackground";
import AboutMe from "./about-me/AboutMe";
import Proficiency from "./proficiency/Proficiency";
import {HeroImage} from "./hero-image/HeroImage";
import {InView} from "react-intersection-observer";

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
    );
}

const Header = ({ text }) => {
    const [splash, setSplash] = useState(text)
    const controls = useAnimation();
    const fade = {
        "in": {
            opacity: 1,
        },
        "out": {
            opacity: 0,
        }
    }

    useEffect(( ) => {
        (async () => {
            await controls.start("out");
            setSplash(text)
            await controls.start("in");
        }) ()
    }, [text, controls])

    return (
        <div className={"index__header pt-3 pt-md-5 px-md-5"}>
            <span className={"overlay-header__name"}>
                <motion.span
                    animate={controls}
                    variants={fade}
                >
                    {splash}
                </motion.span>
            </span>
            <span className={"overlay-header__icon-group"}>
                <div className={"overlay-header__icon"}>
                    <GitHubIcon/>
                </div>
                <div className={"overlay-header__icon"}>
                    <LinkedInIcon/>
                </div>
            </span>
        </div>
    )
}

const headers = {
    "hero": "Anthony Poon",
    "about-me": "About Me",
    "proficiency": "Skill Sets"
}

class IndexApp extends React.Component {
    state = {
        observing: "hero"
    }

    render() {
        const {
            observing
        } = this.state;
        const header = headers[observing];
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
                    <Header
                        text={header}
                    />
                    <div className={"index__scroll-panel"}>
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
                    </div>
                </motion.div>
            </div>
        );
    }
}

export default IndexApp;