import {FadeLeft, FadeOut} from "../../share/components/animations/fade";
import Observer from "../../share/components/animations/observer";
import {useState} from "react";
import {motion} from "framer-motion";

const TestRow = ({ children }) => {
    const [observed, setObserved] = useState();
    return (
        <Observer onObserve={() => setObserved(true)} onExit={() => setObserved(false)}>
            <FadeOut visible={observed}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"py-5 d-flex align-items-center justify-content-center"}>
                            {children}
                        </div>
                    </div>
                </div>
            </FadeOut>
        </Observer>

    )
}

const ObserverTestView = () => {
    const chars = [];
    for (let i = 65; i < 65 + 26; i ++) {
        chars.push(String.fromCharCode(i));
    }
    return (
        <div className={"container"}>
            {
                chars.map((c, i) => (
                    <TestRow
                        key={i}
                    >
                        {c}
                    </TestRow>
                ))
            }
        </div>
    )
}

export default ObserverTestView;