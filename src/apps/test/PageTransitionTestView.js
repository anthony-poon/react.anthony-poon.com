import React, {useState} from "react";
import {FadeOutPage, PageTransition} from "../../share/components/animations/page-transition";

const PageTransitionTestView = () => {
    const [page, setPage] = useState();
    return (
        <div className={"container"}>
            <div>
                {
                    [0, 1, 2, 3, null].map((i) => (
                        <button key={i} onClick={() => setPage(i)} className={"btn btn-outline-primary mt-3 mb-4 me-3"}>{i === null ? "null" : i}</button>
                    ))
                }
            </div>
            <div>
                <PageTransition
                    page={page}
                >
                    <FadeOutPage key={0}>
                        0
                    </FadeOutPage>
                    <FadeOutPage key={1}>
                        1
                    </FadeOutPage>
                    <FadeOutPage key={2}>
                        2
                    </FadeOutPage>
                    <FadeOutPage key={3}>
                        3
                    </FadeOutPage>
                </PageTransition>
            </div>
        </div>
    )
}

export default PageTransitionTestView;