import {FadeDown, FadeLeft, FadeOut, FadeRight, FadeUp, VISIBILITY} from "../../share/components/animations/fade";
import React, {useState} from "react";

const FadeTestView = () => {
    const [v, setV] = useState(true);
    return (
        <div className={"vh-100 vw-100 d-flex justify-content-center align-items-center flex-column"}>
            <div>
                <button onClick={() => setV(!v)} className={"btn btn-link mb-4"}>Toggle</button>
            </div>
            <FadeOut
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Out
            </FadeOut>
            <FadeLeft
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Left
            </FadeLeft>
            <FadeRight
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Right
            </FadeRight>
            <FadeDown
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Down
            </FadeDown>
            <FadeUp
                animate={v ? VISIBILITY.visible : VISIBILITY.invisible}
            >
                Fade Up
            </FadeUp>
        </div>
    )
}
export default FadeTestView;