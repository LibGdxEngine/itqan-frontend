import {Fragment} from "react";
import classes from "./Home.module.css";

const Home = (props) => {
    return <Fragment>
        <section>
            <div className={classes.background_image__container}>
                <div className={classes.background_gradient}></div>
                <img className={classes.background_image} src="/BACKGROUND.svg" alt="background"/>
            </div>
            <div className={classes.hero_section_content}>
                <h1>دورات احترافية وقوية</h1>
                <h2>باللغة العربية</h2>
            </div>
            <div className={classes.foreground_image_container}>
                <img className={classes.foreground_image} src="/OBJECTS.svg" alt="background"/>
            </div>
        </section>
    </Fragment>
};

export default Home;