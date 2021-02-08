import {InView} from "react-intersection-observer";
import React from "react";

export const ParallaxContainer = ({ children, onObserve, onExit, ...rest }) => {
    const defaultOptions = {
        rootMargin: "-25% 0% -25% 0%",
        threshold: 0,
        triggerOnce: false,
        initialInView: false
    }
    const options = Object.assign({}, defaultOptions , rest)
    return (
        <InView
            { ...options }
            onChange={(inView, entry) => {
                if (inView && onObserve) {
                    onObserve(entry)
                } else if (onExit) {
                    onExit(entry)
                }
            }}
        >
            { children }
        </InView>
    );
}