import React from "react";
import "./stylesheet.scss";
import {FadeLeft, FadeUp} from "../../../share/components/animations/fade";


class AboutMe extends React.Component {

    render() {
        return (
            <div className={"content__about-me"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <FadeLeft
                            className={"col about-me__text"}
                        >
                            <p className={"mb-5"}>
                                Hi, I am Anthony. I develop frontend and backend applications.
                            </p>
                            <p className={"mb-5"}>
                                I started as a self-taught PHP programmer back in around 2015. Since then, I discovered my passion in programming and technology in general.
                                Now, I have worked on many project involving different languages, and of different scales.
                            </p>
                            <p>
                                I earned my master's degree in Computer Science in 2018, and I am currently working as a Web Developer in Hong Kong
                            </p>
                        </FadeLeft>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;