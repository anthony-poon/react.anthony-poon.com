import {FadeOut} from "../../share/components/animations/fade";
import {Link} from "react-router-dom";

const ProjectView = () => {
    return (
        <div className={"pt-5 pb-3"}>
            <div className={"text-decoration-underline fs-3 font-monospace mb-4"}>
                Lorem Ipsum
            </div>
            <div className={"project-view__image-container mb-4"}>
                <img className={"img-fluid"} src={"https://picsum.photos/200/300"}/>
            </div>
            <div className={"project-view__text-container"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac diam a sem posuere rhoncus non tristique nunc. Suspendisse potenti. Duis in metus magna. Nullam eget eros at ipsum ornare consectetur eu vel leo. Sed finibus luctus egestas. Pellentesque vel sem sed justo vestibulum pellentesque. Cras condimentum ex eu ipsum faucibus iaculis. Suspendisse potenti. Proin eget felis gravida, dictum odio at, ullamcorper lorem. Ut maximus eu justo vestibulum pharetra. Nullam luctus euismod quam, ut gravida justo rhoncus et. Sed pharetra faucibus mauris, eu mattis dui dignissim varius. Duis a pharetra tellus, quis pellentesque ligula. Vivamus maximus nisi turpis, eu egestas turpis porttitor quis. Nullam dapibus semper volutpat.
                </p>
            </div>
        </div>
    );
}

const MyProjectApp = () => {
    return (
        <div className={"my-project-app__container"}>
            <FadeOut>
                <div className={"row"}>
                    <div className={"col-12 col-md-6 mx-auto"}>
                        <Link to={"/"}>Back</Link>
                        <ProjectView/>
                    </div>
                </div>


            </FadeOut>
        </div>
    )
}

export default MyProjectApp;