import {motion} from "framer-motion";
import PropTypes from "prop-types";
import {ANIMATION, VARIANTS} from "./share";

const Fade = ({ visible, initial, transition, children, variants, ...rest }) => {
    const exit = visible === undefined ? null : VARIANTS.invisible;
    return (
        <motion.div
            {...rest}
            initial={initial ? VARIANTS.initial : null}
            animate={visible ? VARIANTS.visible : VARIANTS.invisible}
            exit={exit}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

const FadeOut = ({transition, ...rest}) => {
    return (
        <Fade
            {...rest}
            variants={ANIMATION.fade({
                direction: "out",
                transition: transition
            })}
        />
    )
}

const FadeLeft = ({ transition, ...rest }) => {
    return (
        <Fade
            {...rest}
            variants={ANIMATION.fade({
                direction: "left",
                transition: transition
            })}
        />
    )
}

const FadeRight = ({transition, ...rest }) => {

    return (
        <Fade
            {...rest}
            variants={ANIMATION.fade({
                direction: "right",
                transition: transition
            })}
        />
    )
}

const FadeUp = ({transition, ...rest }) => {
    return (
        <Fade
            {...rest}
            variants={ANIMATION.fade({
                direction: "up",
                transition: transition
            })}
        />
    )
}

const FadeDown = ({transition, ...rest }) => {
    return (
        <Fade
            {...rest}
            variants={ANIMATION.fade({
                direction: "down",
                transition: transition
            })}
        />
    )
}

Fade.defaultProps = {
    visible: true,
    initial: false,
}

Fade.propTypes = {
    visible: PropTypes.bool,
    initial: PropTypes.bool,
}

FadeOut.defaultProps = {
    visible: true,
    initial: false,
}

FadeOut.propTypes = {
    visible: PropTypes.bool,
    initial: PropTypes.bool,
}

FadeLeft.defaultProps = {
    visible: true,
    initial: false,
}

FadeLeft.propTypes = {
    visible: PropTypes.bool,
    initial: PropTypes.bool,
}

FadeRight.defaultProps = {
    visible: true,
    initial: false,
}

FadeRight.propTypes = {
    visible: PropTypes.bool,
    initial: PropTypes.bool,
}

FadeDown.defaultProps = {
    visible: true,
    initial: false,
}

FadeDown.propTypes = {
    visible: PropTypes.bool,
    initial: PropTypes.bool,
}

FadeUp.defaultProps = {
    visible: true,
    initial: false,
}

FadeUp.propTypes = {
    visible: PropTypes.bool,
    initial: PropTypes.bool,
}


export {
    FadeOut,
    FadeLeft,
    FadeRight,
    FadeDown,
    FadeUp
}
