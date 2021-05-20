import PropTypes from "prop-types";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import React from "react";
import {VISIBILITY} from "./variants";

const Observer = ({children, onObserve, onExit, ...rest}) => {
    return (
        <InView
            {...rest}
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
                    animate={inView ? VISIBILITY.visible : VISIBILITY.invisible}
                >
                    {children}
                </motion.div>
            )}
        </InView>
    )
}

Observer.defaultProps = {
    rootMargin: "0px",
    threshold: 1,
    triggerOnce: false,
    initialInView: false
}

Observer.propTypes = {
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
    triggerOnce: PropTypes.bool,
    initialInView: PropTypes.bool,
    onObserve: PropTypes.func,
    onExit: PropTypes.func,
    children: PropTypes.node.isRequired
}

export default Observer;