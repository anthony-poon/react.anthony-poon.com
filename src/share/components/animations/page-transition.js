import {Route, Switch, useLocation} from "react-router-dom";
import {FadeLeft, VISIBILITY} from "./fade";
import FadeTestView from "../../../apps/test/FadeTestView";
import ObserverTestView from "../../../apps/test/ObserverTestView";
import {AnimatePresence} from "framer-motion";
import React from "react";
import {PRESENTS} from "./variants";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
const fadeOut = {
    [PRESENTS.initial]: {
        opacity: 0
    },
    [PRESENTS.mount]: {
        opacity: 1
    },
    [PRESENTS.unmount]: {
        opacity: 0
    },
}

const fadeUp = {
    [PRESENTS.initial]: {
        opacity: 0,
        y: 50,
    },
    [PRESENTS.mount]: {
        opacity: 1,
        y: 0,
    },
    [PRESENTS.unmount]: {
        opacity: 0,
        y: -50,
    },
}

const fadeDown = {
    [PRESENTS.initial]: {
        opacity: 0,
        y: -50,
    },
    [PRESENTS.mount]: {
        opacity: 1,
        y: 0,
    },
    [PRESENTS.unmount]: {
        opacity: 0,
        y: 50,
    },
}

const fadeLeft = {
    [PRESENTS.initial]: {
        opacity: 0,
        x: 50,
    },
    [PRESENTS.mount]: {
        opacity: 1,
        x: 0,
    },
    [PRESENTS.unmount]: {
        opacity: 0,
        x: -50,
    },
}

const fadeRight = {
    [PRESENTS.initial]: {
        opacity: 0,
        x: -50,
    },
    [PRESENTS.mount]: {
        opacity: 1,
        x: 0,
    },
    [PRESENTS.unmount]: {
        opacity: 0,
        x: 50,
    },
}

const FadeOutPage = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={PRESENTS.initial}
                animate={PRESENTS.mount}
                exit={PRESENTS.unmount}
                variants={fadeOut}
            >
                {children}
            </motion.div>
        </Route>
    )
}


const FadeUpPage = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={PRESENTS.initial}
                animate={PRESENTS.mount}
                exit={PRESENTS.unmount}
                variants={fadeUp}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const FadeDownPage = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={PRESENTS.initial}
                animate={PRESENTS.mount}
                exit={PRESENTS.unmount}
                variants={fadeDown}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const FadeLeftPage = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={PRESENTS.initial}
                animate={PRESENTS.mount}
                exit={PRESENTS.unmount}
                variants={fadeLeft}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const FadeRightPage = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={PRESENTS.initial}
                animate={PRESENTS.mount}
                exit={PRESENTS.unmount}
                variants={fadeRight}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const PageTransition = ({ exitBeforeEnter, children, ...rest }) => {
    const location = useLocation();
    return (
        <AnimatePresence {...rest} exitBeforeEnter={exitBeforeEnter}>
            <Switch location={location} key={location.pathname}>
                { children }
            </Switch>
        </AnimatePresence>
    )
}

export {
    FadeOutPage,
    FadeUpPage,
    FadeDownPage,
    FadeLeftPage,
    FadeRightPage,
    PageTransition,
    PRESENTS
}

PageTransition.defaultProps = {
    exitBeforeEnter: true
}

PageTransition.propTypes = {
    exitBeforeEnter: PropTypes.bool
}