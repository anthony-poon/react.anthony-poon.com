import {motion} from "framer-motion";
import PropTypes from "prop-types";
import { VISIBILITY } from "./variants";
import _ from "lodash";
const fadeOut = {
    [VISIBILITY.visible]: {
        opacity: 1,
    },
    [VISIBILITY.invisible]: {
        opacity: 0,
    }
};

const fadeLeft = {
    [VISIBILITY.visible]: {
        opacity: 1,
        x: 0,
    },
    [VISIBILITY.invisible]: {
        opacity: 0,
        x: -50,
    }
};

const fadeRight = {
    [VISIBILITY.visible]: {
        opacity: 1,
        x: 0,
    },
    [VISIBILITY.invisible]: {
        opacity: 0,
        x: 50,
    }
};

const fadeDown = {
    [VISIBILITY.visible]: {
        opacity: 1,
        y: 0,
    },
    [VISIBILITY.invisible]: {
        opacity: 0,
        y: 50,
    }
};

const fadeUp = {
    [VISIBILITY.visible]: {
        opacity: 1,
        y: 0,
    },
    [VISIBILITY.invisible]: {
        opacity: 0,
        y: -50,
    }
};


const Fade = ({ animate, children, variants, ...rest }) => {
    return (
        <motion.div
            {...rest}
            animate={animate}
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

const FadeOut = (props) => {
    return (
        <Fade
            {...props}
            variants={fadeOut}
        />
    )
}

const FadeLeft = ({ animate, children, ...rest }) => {
    return (
        <Fade
            {...rest}
            animate={animate}
            variants={fadeLeft}
        >
            {children}
        </Fade>
    )
}

const FadeRight = ({ animate, children, ...rest }) => {
    return (
        <Fade
            {...rest}
            animate={animate}
            variants={fadeRight}
        >
            {children}
        </Fade>
    )
}

const FadeUp = ({ animate, children, ...rest }) => {
    return (
        <Fade
            {...rest}
            animate={animate}
            variants={fadeUp}
        >
            {children}
        </Fade>
    )
}

const FadeDown = ({ animate, children, ...rest }) => {
    return (
        <Fade
            {...rest}
            animate={animate}
            variants={fadeDown}
        >
            {children}
        </Fade>
    )
}

export {
    VISIBILITY,
    FadeOut,
    FadeLeft,
    FadeRight,
    FadeDown,
    FadeUp
}

FadeOut.propTypes = {
    animate: PropTypes.oneOf(Object.keys(fadeOut))
}

FadeLeft.propTypes = {
    animate: PropTypes.oneOf(Object.keys(fadeLeft))
}

FadeRight.propTypes = {
    animate: PropTypes.oneOf(Object.keys(fadeRight))
}

FadeDown.propTypes = {
    animate: PropTypes.oneOf(Object.keys(fadeDown))
}

FadeUp.propTypes = {
    animate: PropTypes.oneOf(Object.keys(fadeUp))
}