import React from "react";
import {ReactComponent as AboutMeFullStack} from "./images/about-me-full-stack.svg";
import {ReactComponent as AboutMeEdu} from "./images/about-me-edu.svg";
import {ReactComponent as AboutMeMobile} from "./images/about-me-app.svg";
import {ReactComponent as AboutMeCV} from "./images/about-me-cv-2.svg";
import "./stylesheet.scss";

const slides = [
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab consectetur corporis delectus deserunt
            exercitationem in ipsum iste itaque, iure labore maxime necessitatibus optio quaerat, quasi reiciendis
            voluptas. Deserunt, molestiae.`,
    `Aspernatur atque maiores possimus repellendus. Architecto explicabo illum nihil pariatur saepe tenetur
            totam, voluptates. Accusamus assumenda distinctio est facere facilis fuga fugiat id laudantium neque
            perferendis quisquam rerum, sed unde.`,
    `Beatae culpa et odit quas voluptatibus! Accusamus alias animi architecto assumenda culpa deserunt
            distinctio esse ex expedita impedit iste minima nihil, nisi numquam saepe unde voluptatem. Animi
            mollitia nihil officiis.`,
    `Ad aliquid amet impedit in incidunt inventore iste libero magni, maxime molestias, nesciunt omnis quam
            saepe. Aliquid commodi facilis fugit minima modi, nam odit, reiciendis sequi tenetur unde, voluptatem
            voluptates.`,
    `Accusantium animi cum cupiditate distinctio ducimus error ipsa ipsum laboriosam laudantium molestiae
            nemo placeat, quae qui quis sed soluta vero voluptate. Consequatur eligendi minima nihil tenetur
            voluptas? Alias, id nobis.`,
]
const slideIcons = [
    AboutMeFullStack,
    AboutMeEdu,
    AboutMeMobile,
    AboutMeCV
];

class AboutMe extends React.Component {
    state = {
        slideIndex: 0
    }

    handleSlideChange(index) {
        this.setState({
            slideIndex: index
        })
    }

    render() {
        const {
            slideIndex
        } = this.state;
        return (
            <div
                className={"content__about-me"}
            >
                <div className={"container"}>
                    <div className={"about-me__container row"}>
                        <div
                            className={"col-md col-12 about-me__lhs"}
                        >
                            <div className={"about-me__selection-group row"}>
                                <span className={"about-me__selection col-12 col-md-3 my-2"}
                                      onMouseEnter={() => this.handleSlideChange(0)}>Option 1</span>
                                <span className={"about-me__selection col-12 col-md-3 my-2"}
                                      onMouseEnter={() => this.handleSlideChange(1)}>Option 2</span>
                                <span className={"about-me__selection col-12 col-md-3 my-2"}
                                      onMouseEnter={() => this.handleSlideChange(2)}>Option 3</span>
                                <span className={"about-me__selection col-12 col-md-3 my-2"}
                                      onMouseEnter={() => this.handleSlideChange(3)}>Option 4</span>
                            </div>
                            <div className={"about-me__slide-container"}>
                                {
                                    slides.map((text, index) => (
                                        <div key={index}
                                             className={"about-me__slide " + (index === slideIndex ? "about-me__slide--visible" : "about-me__slide--invisible")}
                                        >
                                            {text}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={"col-md-auto col-12 about-me__rhs"}>
                            <div className={"about-me__icon-container"}>
                                {
                                    slideIcons.map((Icon, index) => (
                                        <Icon key={index}
                                              className={"about-me__icon " + (index === slideIndex ? "about-me__icon--visible" : "about-me__icon--invisible")}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;