import {Route, Switch, useLocation} from "react-router-dom";
import {FadeLeft, VISIBILITY} from "./fade";
import FadeTestView from "../../../apps/test/FadeTestView";
import ObserverTestView from "../../../apps/test/ObserverTestView";
import {AnimatePresence} from "framer-motion";
import React from "react";
import {VARIANTS, ANIMATION} from "./share";
import {motion} from "framer-motion";
import PropTypes from "prop-types";


const FadeOutRoute = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={VARIANTS.initial}
                animate={VARIANTS.visible}
                exit={VARIANTS.invisible}
                variants={ANIMATION.fade({
                    direction: "out"
                })}
            >
                {children}
            </motion.div>
        </Route>
    )
}


const FadeUpRoute = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={VARIANTS.initial}
                animate={VARIANTS.visible}
                exit={VARIANTS.invisible}
                variants={ANIMATION.fade({
                    direction: "up"
                })}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const FadeDownRoute = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={VARIANTS.initial}
                animate={VARIANTS.visible}
                exit={VARIANTS.invisible}
                variants={ANIMATION.fade({
                    direction: "down"
                })}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const FadeLeftRoute = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={VARIANTS.initial}
                animate={VARIANTS.visible}
                exit={VARIANTS.invisible}
                variants={ANIMATION.fade({
                    direction: "left"
                })}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const FadeRightRoute = ({ path, children, ...rest }) => {
    return (
        <Route {...rest} path={path} key={path}>
            <motion.div
                initial={VARIANTS.initial}
                animate={VARIANTS.visible}
                exit={VARIANTS.invisible}
                variants={ANIMATION.fade({
                    direction: "right"
                })}
            >
                {children}
            </motion.div>
        </Route>
    )
}

const RouteTransition = ({ exitBeforeEnter, children, ...rest }) => {
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
    FadeOutRoute,
    FadeUpRoute,
    FadeDownRoute,
    FadeLeftRoute,
    FadeRightRoute,
    RouteTransition,
}

RouteTransition.defaultProps = {
    exitBeforeEnter: true
}

RouteTransition.propTypes = {
    exitBeforeEnter: PropTypes.bool
}