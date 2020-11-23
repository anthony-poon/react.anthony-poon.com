import React from "react"
import "./stylesheet.scss"
import MenuIcon from '@material-ui/icons/Menu';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

class IndexApp extends React.Component {
    render() {
        return (
            <>
                <div className={"overlay__header pt-3 px-3 pt-md-5 px-md-5"}>
                    <div className={"container-fluid"}>
                        <div className={"row"}>
                            <div className={"col-3 d-flex align-items-center"}>
                                <div className={"ml-4 overlay-header__menu p-3 d-inline-flex align-items-center hoverable-dark"}>
                                    {/*<MenuIcon/>*/}
                                    {/*<span className={"ml-4 overlay-header__menu-text"}>Menu</span>*/}
                                </div>
                            </div>
                            <div className={"col d-flex align-items-center justify-content-center"}>
                                <span className={"overlay-header__name"}>Anthony Poon</span>
                            </div>
                            <div className={"col-3 d-flex align-items-center justify-content-end"}>
                                <div className={"hoverable-dark p-3"}>
                                    <GitHubIcon/>
                                </div>
                                <div className={"hoverable-dark p-3"}>
                                    <LinkedInIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"overlay__footer"}>

                </div>
                <div className={"content__wrapper"}>

                </div>
            </>

        );
    }
}

export default IndexApp;