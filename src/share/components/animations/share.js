const VARIANTS = {
    visible: "visible",
    invisible: "invisible",
    initial: "initial"
}

const fade = ({ direction = "out", transition = {} }) => ({
    [VARIANTS.initial]: {
        opacity: 0,
        x: direction === "left" ? 50
            : direction === "right" ? -50
                : 0,
        y: direction === "up" ? 50
            : direction === "down" ? -50
                : 0
    },
    [VARIANTS.visible]: {
        opacity: 1,
        x: 0,
        y: 0,
    },
    [VARIANTS.invisible]: {
        opacity: 0,
        x: direction === "left" ? -50
            : direction === "right" ? 50
            : 0,
        y: direction === "up" ? -50
            : direction === "down" ? 50
            : 0,
    }
});

const ANIMATION = {
    fade
}

export {
    VARIANTS,
    ANIMATION
}