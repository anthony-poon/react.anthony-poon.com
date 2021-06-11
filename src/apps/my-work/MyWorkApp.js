import {FadeOut} from "../../share/components/animations/fade";
import {Link} from "react-router-dom";

const MyWorkApp = () => {
    return (
        <div className={"my-work-app__container"}>
            <FadeOut>
                <Link to={"/"}>Back</Link>
            </FadeOut>
        </div>
    )
}