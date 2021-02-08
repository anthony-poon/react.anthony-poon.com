import React from "react"
import {AnimatePresence, motion} from "framer-motion";
import "./stylesheet.scss"
import {ReactComponent as IconLoading} from "./images/icon_loading.svg";

const AnimatedSquare = ({ offset, animate, children }) => {
    const variants = {
        "initial": i => ({
            z: (i - 2) * 20,
            backgroundColor: `rgba(227, 178, 60, ${ (i + 1) * 0.1})`
        }),
        "splash": i => ({
            z: (i - 2) * 20,
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
            className={`canvas__shape canvas__shape-${offset + 1}`}
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

const Splash = ({isVisible}) => {
    return (
        <AnimatePresence>
            {
                isVisible && (
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
                            delay: 1,
                            ease: "easeOut"
                        }}
                    >
                        <span className={"splash__text"}>Hello World</span>
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
        return (
            <Canvas
                animate={animate}
            >
                <div
                    className={"canvas__3d-plane"}
                >
                    <AnimatedSquare animate={animate} offset={0}/>
                    <AnimatedSquare animate={animate} offset={1}/>
                    <AnimatedSquare animate={animate} offset={2}/>
                    <AnimatedSquare animate={animate} offset={3}>
                        <Spinner
                            isVisible={animate === "initial"}
                        />
                        <Splash
                            isVisible={animate === "splash"}
                        />
                    </AnimatedSquare>
                </div>
            </Canvas>
        );
    }
}

export default DynamicBackground;