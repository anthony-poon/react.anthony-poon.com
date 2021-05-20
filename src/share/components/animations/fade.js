import {motion} from "framer-motion";
import PropTypes from "prop-types";
import { VISIBILITY } from "./variants";

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
        x: 0,
    },
    [VISIBILITY.invisible]: {
        x: -50,
    }
};

const fadeRight = {
    [VISIBILITY.visible]: {
        x: 0,
    },
    [VISIBILITY.invisible]: {
        x: 50,
    }
};

const fadeDown = {
    [VISIBILITY.visible]: {
        y: 0,
    },
    [VISIBILITY.invisible]: {
        y: 50,
    }
};

const fadeUp = {
    [VISIBILITY.visible]: {
        y: 0,
    },
    [VISIBILITY.invisible]: {
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
        <FadeOut
            {...rest}
            animate={animate}
        >
            <Fade
                variants={fadeLeft}
            >
                {children}
            </Fade>
        </FadeOut>
    )
}

const FadeRight = ({ animate, children, ...rest }) => {
    return (
        <FadeOut
            {...rest}
            animate={animate}
        >
            <Fade
                variants={fadeRight}
            >
                {children}
            </Fade>
        </FadeOut>
    )
}

const FadeUp = ({ animate, children, ...rest }) => {
    return (
        <FadeOut
            {...rest}
            animate={animate}
        >
            <Fade
                variants={fadeUp}
            >
                {children}
            </Fade>
        </FadeOut>
    )
}

const FadeDown = ({ animate, children, ...rest }) => {
    return (
        <FadeOut
            {...rest}
            animate={animate}
        >
            <Fade
                variants={fadeDown}
            >
                {children}
            </Fade>
        </FadeOut>
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