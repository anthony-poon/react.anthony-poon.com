import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import React from "react";

export const ParallaxContainer = (props) => {
    const {
        children,
        ...rest
    } = props;
    const { ref, inView } = useInView({
        rootMargin: "-25% 0% -25% 0%",
        threshold: 0.25,
        triggerOnce: false
    });
    return (
        <motion.div
            { ...rest }
            ref={ref}
            animate={inView ? "in" : "out"}
        >
            { children }
        </motion.div>
    );
}

export const fadeLeft = {
    "in": {
        x: 0,
        opacity: 1
    },
    "out": {
        x: -40,
        opacity: 0
    }
}

export const fadeRight = {
    "in": {
        x: 0,
        opacity: 1
    },
    "out": {
        x: 40,
        opacity: 0
    }
}