import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import _ from "lodash";
import {ANIMATION, VARIANTS} from "./share";

const FadeOutPage = ({children, ...rest}) => {
    return (
        <motion.div
            {...rest}
            initial={VARIANTS.initial}
            animate={VARIANTS.visible}
            exit={VARIANTS.invisible}
            variants={ANIMATION.fade({
                direction: "out",
            })}
        >
            {children}
        </motion.div>
    )
}

const FadeLeftPage = ({children, ...rest}) => {
    return (
        <motion.div
            {...rest}
            initial={VARIANTS.initial}
            animate={VARIANTS.visible}
            exit={VARIANTS.invisible}
            variants={ANIMATION.fade({
                direction: "left",
            })}
        >
            {children}
        </motion.div>
    )
}

const FadeRightPage = ({children, ...rest}) => {
    return (
        <motion.div
            {...rest}
            initial={VARIANTS.initial}
            animate={VARIANTS.visible}
            exit={VARIANTS.invisible}
            variants={ANIMATION.fade({
                direction: "right",
            })}
        >
            {children}
        </motion.div>
    )
}

const FadeUpPage = ({children, ...rest}) => {
    return (
        <motion.div
            {...rest}
            initial={VARIANTS.initial}
            animate={VARIANTS.visible}
            exit={VARIANTS.invisible}
            variants={ANIMATION.fade({
                direction: "up",
            })}
        >
            {children}
        </motion.div>
    )
}

const FadeDownPage = ({children, ...rest}) => {
    return (
        <motion.div
            {...rest}
            initial={VARIANTS.initial}
            animate={VARIANTS.visible}
            exit={VARIANTS.invisible}
            variants={ANIMATION.fade({
                direction: "down",
            })}
        >
            {children}
        </motion.div>
    )
}

const PageTransition = ({page, children, ...rest}) => {
    const child = _.find(children, { key: `${page}` });
    return (
        <AnimatePresence
            {...rest}
            exitBeforeEnter={true}
        >
            {child}
        </AnimatePresence>
    )
}

export {
    PageTransition,
    FadeOutPage
}