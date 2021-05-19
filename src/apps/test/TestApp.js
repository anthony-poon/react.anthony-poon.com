import React from "react"
import "./stylesheet.scss";
import {Frame, Page} from "framer";

class TestApp extends React.Component {
    render() {
        return (
            <Page
                width={"100vw"}
                height={"100vh"}
                direction={"vertical"}
                wheelEnabled={true}
                className={"test__container"}>
                <Frame
                    background={"rgba(0,0,0,0)"}
                >
                    A
                </Frame>
                <Frame
                    background={"rgba(0,0,0,0)"}
                >
                    B
                </Frame>
                <Frame
                    background={"rgba(0,0,0,0)"}
                >
                    C
                </Frame>
            </Page>
        );
    }
}

export default TestApp;