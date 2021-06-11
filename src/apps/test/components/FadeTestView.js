import {FadeDown, FadeLeft, FadeOut, FadeRight, FadeUp} from "../../share/components/animations/fade";
import React, {useState} from "react";

const FadeTestView = () => {
    const [v, setV] = useState(true);
    return (
        <div className={"container"}>
            <div>
                <button onClick={() => setV(!v)} className={"btn btn-outline-primary mt-3 mb-4"}>Toggle</button>
            </div>
            <div className={"display-4 mb-4"}>
                Fade In / Out
            </div>
            <div>
                <div className={"ps-4"}>
                    <FadeOut
                        className={"py-2"}
                        visible={v}
                    >
                        Fade Out
                    </FadeOut>
                    <FadeLeft
                        className={"py-2"}
                        visible={v}
                    >
                        Fade Left
                    </FadeLeft>
                    <FadeRight
                        className={"py-2"}
                        visible={v}
                    >
                        Fade Right
                    </FadeRight>
                    <FadeDown
                        className={"py-2"}
                        visible={v}
                    >
                        Fade Down
                    </FadeDown>
                    <FadeUp
                        className={"py-2"}
                        visible={v}
                    >
                        Fade Up
                    </FadeUp>
                </div>
            </div>
        </div>
    )
}
export default FadeTestView;