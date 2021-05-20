import {FadeLeft} from "../../share/components/animations/fade";
import Observer from "../../share/components/animations/observer";

const TestRow = ({ children }) => {
    return (
        <Observer>
            <FadeLeft>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"py-5 d-flex align-items-center justify-content-center"}>
                            {children}
                        </div>
                    </div>
                </div>
            </FadeLeft>
        </Observer>

    )
}
const ObserverTestView = () => {
    const chars = [];
    for (let i = 65; i < 65 + 27; i ++) {
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