import React from "react"
import {motion} from "framer-motion";
import "./stylesheet.scss"


const AnimatedSquare = (props) => {
    const {
        offset,
        children
    } = props;
    return (
        <motion.div
            inherit={false}
            initial={{
                z: offset * 20
            }}
            animate={{
                z: offset * 20 + 20
            }}
            transition={{
                delay: 0.5 * offset,
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
            }}
            className={`canvas__shape canvas__shape-${offset + 1}`}
        >
            {children}
        </motion.div>
    );
}


class DynamicBackground extends React.Component {
    render() {
        return (
            <div className={"background__canvas"}>
                <div
                    className={"canvas__3d-plane"}
                >
                    <AnimatedSquare offset={0}/>
                    <AnimatedSquare offset={1}/>
                    <AnimatedSquare offset={2}/>
                    <AnimatedSquare offset={3}>
                    </AnimatedSquare>
                </div>
            </div>
        );
    }
}

export default DynamicBackground;