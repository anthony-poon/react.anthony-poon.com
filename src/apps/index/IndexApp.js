import React from "react"
import "./stylesheet.scss"
import {FadeLeft, FadeOut, FadeRight} from "../../share/components/animations/fade";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Header = () => {
    return (
        <div className={"index-app__header pt-3 pt-md-5 px-md-5 px-3"}>
            <div className={"row"}>
                <div className={"col-md-3 col-0"}>
                </div>
                <FadeOut
                    className={"col header__name pb-2"}
                >
                    Anthony Poon
                </FadeOut>
                <div className={"col-3 header__icon-group"}>
                </div>
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <FadeOut
            className={"index-app__body"}
        >
            <div className={"container-fluid"}>
                <div className={"row h-100"}>
                    <div className={"col body__lhs"}>
                        <div className={"body__lhs-text-container"}>
                            <FadeLeft className={"lhs__line-1 display-4"}>I am a</FadeLeft>
                            <FadeRight className={"lhs__line-2 display-1"}>Full Stack Developer</FadeRight>
                            <FadeLeft className={"lhs__line-3 lead"}>I build web application with PHP, React, Spring Boot.</FadeLeft>
                        </div>
                    </div>
                    <div className={"col-md-auto col-12 body__rhs"}>
                        <div className={"body__rhs-menu-container"}>
                            <a href={"https://github.com/anthony-poon/"} className={"rhs-icon__container"}>
                                <div className={"rhs-icon__top"}>
                                    <div className={"rhs-icon__circle"}>
                                        <GitHubIcon/>
                                    </div>
                                </div>
                                <div className={"rhs-icon__bottom"}>
                                    GitHub
                                </div>
                            </a>
                            <a href={"https://www.linkedin.com/in/anthony-poon"} className={"rhs-icon__container"}>
                                <FadeRight className={"rhs-icon__top"}>
                                    <div className={"rhs-icon__circle"}>
                                        <LinkedInIcon/>
                                    </div>
                                </FadeRight>
                                <FadeRight className={"rhs-icon__bottom"}>
                                    LinkedIn
                                </FadeRight>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </FadeOut>
    )
}

const IndexApp = () => {
    return (
        <div className={"index-app__container"}>
            <Header/>
            <Body/>
        </div>
    );
}

export default IndexApp;