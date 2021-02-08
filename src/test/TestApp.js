import React from "react"
import "./stylesheet.scss";
import { motion } from "framer-motion";

const square = {
    first: {
        backgroundColor: "#fff",
        y: -50,
        x: -50
    },
    second: {
        backgroundColor: "#f00",
        y: 0,
        x: -50
    },
    third: {
        backgroundColor: "#000",
        x: 50,
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror"
        }
    }
}

class TestApp extends React.Component {
    render() {
        return (
            <div className={"test__container"}>
                <motion.div
                    initial={"first"}
                    animate={["third"]}
                    variants={square}
                    className={"square"}
                />
            </div>
        );
    }
}

export default TestApp;