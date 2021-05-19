import React, {useEffect, useRef, useState} from "react"
import {AnimatePresence, motion} from "framer-motion";
import "./stylesheet.scss"
import {ReactComponent as IconLoading} from "./images/icon_loading.svg";

const AnimatedSquare = ({ offset, animate, children, fade = false }) => {
    const variants = {
        "initial": i => ({
            z: (i - 2) * 40,
            backgroundColor: `rgba(227, 178, 60, ${ (i + 1) * 0.1})`
        }),
        "splash": i => ({
            z: (i - 2) * 40,
            backgroundColor: `rgba(227, 178, 60, ${ (i + 1) * 0.1})`
        }),
        "loop_1": i => ({
            z: (i - 2) * 20 + 40,
            backgroundColor: `rgba(227, 178, 60, ${ (i + 1) * 0.1})`,
            transition: {
                delay: i * 0.5,
                repeat: Infinity,
                duration: 3,
                repeatDelay: 0.5,
                repeatType: "reverse",
            }
        })
    }
    return (
        <motion.div
            custom={offset}
            animate={animate}
            variants={variants}
            className={`canvas__shape canvas__shape-${offset + 1} ` + (fade ? "canvas__shape--fade" : "")}
        >
            {children}
        </motion.div>
    );
}

const Spinner = ({isVisible}) => {
    return (
        <AnimatePresence>
            {
                isVisible && (
                    <motion.div
                        initial={{
                            y: -20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        exit={{
                            y: 20,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                    >
                        <IconLoading/>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

const Splash = ({ text }) => {
    const [splash, setSplash] = useState(text);
    const ref = useRef(0)
    useEffect(() => {
        if (text && text !== splash) {
            setSplash(text)
            if (ref.current) {
                clearTimeout(ref.current)
            }
            ref.current = setTimeout(() => {
                setSplash("")
            }, 1700)
        }
        // eslint-disable-next-line
    }, [text])
    return (
        <AnimatePresence
            exitBeforeEnter
        >
            {
                splash && (
                    <motion.div
                        initial={{
                            x: -20,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        exit={{
                            x: 20,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                    >
                        <span className={"splash__text"}>{splash}</span>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

const Canvas = ({ animate, children }) => {
    const variants = {
    }
    return (
        <motion.div
            animate={animate}
            variants={variants}
            className={"background__canvas"}
        >
            { children }
        </motion.div>
    )
}

class DynamicBackground extends React.Component {
    state = {
        animate: "initial"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                animate: "splash"
            })
        }, 3000);
        setTimeout(() => {
            this.setState({
                animate: "loop_1"
            })
        }, 6000);
    }

    render() {
        const {
            animate
        } = this.state;
        const {
            observing
        } = this.props;
        const splashes = {
            "hero": "Hello World",
            "about-me-padding": "About Me"
        }
        const splash = splashes[observing] ?? null;
        return (
            <Canvas
                animate={animate}
            >
                <div
                    className={"canvas__3d-plane"}
                >
                    <AnimatedSquare animate={animate} offset={0} fade={!splash}/>
                    <AnimatedSquare animate={animate} offset={1} fade={!splash}/>
                    <AnimatedSquare animate={animate} offset={2} fade={!splash}/>
                    <AnimatedSquare animate={animate} offset={3} fade={!splash}>
                        <Spinner
                            isVisible={animate === "initial"}
                        />
                        <Splash
                            text={animate !== "initial" ? splash : ""}
                        />
                    </AnimatedSquare>
                </div>
            </Canvas>
        );
    }
}

export default DynamicBackground;