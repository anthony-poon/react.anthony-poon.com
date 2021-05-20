import React, {useState} from "react"
import "./stylesheet.scss";
import {FadeOut, FadeLeft, FadeRight, VISIBILITY, FadeUp, FadeDown} from "share/components/animations/fade";

const TestApp = () => {
    const [v, setV] = useState(true);
    return (
        <div className={"vh-100 vw-100 d-flex justify-content-center align-items-center flex-column"}>
            <FadeOut
                onClick={() => setV(!v)}
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Out
            </FadeOut>
            <FadeLeft
                onClick={() => setV(!v)}
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Left
            </FadeLeft>
            <FadeRight
                onClick={() => setV(!v)}
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Right
            </FadeRight>
            <FadeDown
                onClick={() => setV(!v)}
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Down
            </FadeDown>
            <FadeUp
                onClick={() => setV(!v)}
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Up
            </FadeUp>
        </div>
    );
}

export default TestApp;