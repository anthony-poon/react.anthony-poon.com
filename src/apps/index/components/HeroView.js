import {FadeLeft, FadeOut, FadeRight} from "../../../share/components/animations/fade";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={"hero-view__header pt-3 pt-md-5 px-md-5 px-3"}>
            <div className={"row"}>
                <div className={"col-md-3 col-0"}>
                </div>
                <FadeOut
                    className={"col header__name pb-2"}
                    visible={true}
                >
                    Anthony Poon
                </FadeOut>
                <div className={"col-3 header__icon-group"}>
                    <div className={"header__icon"}>
                        <GitHubIcon/>
                    </div>
                    <div className={"header__icon"}>
                        <LinkedInIcon/>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Body = () => {
    return (
        <FadeOut
            initial={false}
            visible={true}
            className={"hero-view__body px-3 px-md-5 pt-md-5"}
        >
            <FadeLeft className={"body__line-1 display-4 text-center"}>I am a</FadeLeft>
            <FadeRight className={"body__line-2 display-1 text-center"}>Full Stack Developer</FadeRight>
            <FadeLeft className={"body__line-3 lead text-center"}>I build web application with PHP, React, Spring Boot.</FadeLeft>
            <FadeOut className={"body__button-group"}>
                <div className={"row"}>
                    <div className={"col-6 col-md-2 ms-auto"}>
                        <Link to={"/my-project"} className={"body__button"}>
                            My Project
                        </Link>
                    </div>
                    <div className={"col-6 col-md-2 me-auto"}>
                        <Link to={"/contact-me"} className={"body__button"}>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </FadeOut>
        </FadeOut>
    )
}

const HeroView = () => {
    return (
        <div className={"hero-view__container"}>
            <Header/>
            <Body/>
        </div>
    )
}

export default HeroView;