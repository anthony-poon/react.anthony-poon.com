import React from "react";
import {ReactComponent as IconZoom} from "./images/icon-zoom.svg";
import "./stylesheet.scss";

const chart = [
    {
        "name": "PHP",
        "value": "100%",
        "legend": "Mostly using it in work and backend development. Experienced with Symfony framework, Doctrine ORM, PHPUnit."
    },{
        "name": "JS / React / Node",
        "value": "80%",
        "legend": "Mostly using React for frontend development, and sometimes NodeJS + express for backend."
    },{
        "name": "Java",
        "value": "50%",
        "legend": "Worked on some freelance project with other developers. Used Spring Boot as framework."
    },{
        "name": "React Native",
        "value": "30%",
        "legend": "Worked on a mobile app with other developers. Also I have a personal app in Google Play store."
    }
];

class Proficiency extends React.Component{
    state = {
        focus: 0
    }

    handleFocus (index) {
        this.setState({
            focus: index
        })
    }

    render() {
        const {
            focus
        } = this.state;
        return (
            <div className={"content__proficiency"}>
                <div className={"container"}>
                    <div className={"proficiency__chart-container"}>
                        <div className={"row"}>
                            <div className={"col-md-8 col-12 mb-5"}>
                                {
                                    chart.map((row, index) => (
                                        <div className={"proficiency__chart-row row mb-3 mb-md-4 " + (focus === index ? "proficiency__chart-row--focused ml-2 ml-md-0" : "")}
                                             key={index}
                                             onMouseEnter={() => this.handleFocus(index)}
                                        >
                                            <div className={"col-md-3 col-12 proficiency__chart-lhs mb-1 mb-md-0"}>
                                                <span>{ row["name"] }</span>
                                            </div>
                                            <div className={"col proficiency__chart-rhs"}>
                                                <span className={"proficiency__chart-bar"}>
                                                    <span className={"proficiency__chart-bar-fill"} style={{
                                                        width: row["value"]
                                                    }}/>
                                                </span>
                                                <IconZoom
                                                    className={"proficiency__chart-icon " + (focus === index ? "proficiency__chart-icon--focused" : "")}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={"col-md-4 col-12"}>
                                <div className={"proficiency__legend-container ml-md-3 ml-0"}>
                                    {
                                        chart.map((row, index) => (
                                            <div key={index} className={"proficiency__legend " + (focus === index ? "proficiency__legend--focused" : "")}>
                                                <h3 className={"mb-4"}> { row["name"] }</h3>
                                                <div className={"proficiency__legend-text"}>
                                                    { row["legend"] }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Proficiency;