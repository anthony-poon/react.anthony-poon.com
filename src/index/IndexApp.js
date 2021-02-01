import React from "react"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {ReactComponent as DownArrow} from "./images/down-arrow.svg";
import {ReactComponent as MouseIcon} from './images/mouse.svg';
import AboutMeSection from "./about-me/AboutMeSection";
import "./stylesheet.scss"
import ProficiencySection from "./proficiency/ProficiencySection";

class IndexApp extends React.Component {


    render() {


        return (
            <>
                <div className={"overlay__header pt-3 pt-md-5 px-md-5"}>
                    <span className={"overlay-header__name"}>Anthony Poon</span>
                    <span className={"overlay-header__icon-group"}>
                        <div className={"overlay-header__icon"}>
                            <GitHubIcon/>
                        </div>
                        <div className={"overlay-header__icon"}>
                            <LinkedInIcon/>
                        </div>
                    </span>
                </div>
                <div className={"content__wrapper"}>
                    <div className={"content__hero d-flex justify-content-center align-items-center"}>
                        <span className={"hero__display-text"}>I am a Full Stack Developer</span>
                        <span className={"hero__bottom"}>
                            <MouseIcon className={"hero__scroll-icon"}/>
                            <DownArrow className={"hero__down-icon"}/>
                        </span>
                    </div>
                    <AboutMeSection/>
                    <ProficiencySection/>
                </div>
                <div className={"overlay__footer"}>

                </div>
            </>

        );
    }
}

export default IndexApp;