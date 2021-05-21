import React, {useEffect, useState} from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./stylesheet.scss"
import {motion, useAnimation} from "framer-motion";
import DynamicBackground from "./background/DynamicBackground";
import AboutMe from "./about-me/AboutMe";
import Proficiency from "./proficiency/Proficiency";
import {HeroImage} from "./hero-image/HeroImage";
import ContactMe from "./contact-me/ContactMe";
import Observer from "../../share/components/animations/observer";
import {FadeOut, VISIBILITY} from "../../share/components/animations/fade";

const Header = ({ text }) => {
    const [splash, setSplash] = useState(text)
    const controls = useAnimation();

    useEffect(( ) => {
        (async () => {
            await controls.start(VISIBILITY.invisible);
            setSplash(text)
            await controls.start(VISIBILITY.visible);
        }) ()
    }, [text, controls])

    return (
        <div className={"index__header pt-3 pt-md-5 px-md-5"}>
            <span className={"overlay-header__name"}>
                <FadeOut
                    animate={controls}
                >
                    {splash}
                </FadeOut>
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
    "proficiency": "Skill Sets",
    "contact-me": "Contact Me"
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
                        <Observer
                            threshold={0.8}
                            initialInView={true}
                            onObserve={() => this.setState({ observing: "hero" })}
                        >
                            <HeroImage/>
                        </Observer>
                        <Observer
                            threshold={0.7}
                            onObserve={() => this.setState({ observing: "about-me" })}
                        >
                            <AboutMe/>
                        </Observer>
                        <Observer
                            onObserve={() => this.setState({ observing: "proficiency" })}
                        >
                            <Proficiency/>
                        </Observer>
                        <Observer
                            onObserve={() => this.setState({ observing: "contact-me" })}
                        >
                            <ContactMe/>
                        </Observer>
                    </div>
                </motion.div>
            </div>
        );
    }
}

export default IndexApp;