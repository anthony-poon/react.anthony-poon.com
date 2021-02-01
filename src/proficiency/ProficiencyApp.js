import React from "react";
import {ReactComponent as IconZoom} from "./images/icon-zoom.svg";
import "./stylesheet.scss";

const chart = [
    {
        "name": "PHP",
        "value": "100%",
        "legend": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus non quam quis aliquam. " +
            "Aliquam vitae urna sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },{
        "name": "JS / React",
        "value": "100%",
        "legend": "Fusce sit amet pretium tortor. Aliquam pellentesque sodales diam, eu porta nibh aliquet eget. " +
            "Fusce volutpat tellus a pretium varius."
    },{
        "name": "Java",
        "value": "70%",
        "legend": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse " +
            "id efficitur quam, ac accumsan turpis. "
    },{
        "name": "React Native",
        "value": "30%",
        "legend": "Pellentesque blandit odio quis quam dictum rutrum. Suspendisse potenti. Pellentesque auctor massa " +
            "quis nisl elementum, non mattis lectus bibendum."
    }
];

class ProficiencyApp extends React.Component{
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
                    <h1 className={"mb-5"}>Proficiency</h1>
                    <div className={"proficiency__chart-container"}>
                        <div className={"row"}>
                            <div className={"col-md-8 col-12 mb-4"}>
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
                                                <h3 className={"mb-3"}> { row["name"] }</h3>
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

export default ProficiencyApp;