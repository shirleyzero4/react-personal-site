import React, {useState} from "react";
import "./project.css";
import WebImg1 from "../../assets/personal-site.png";

export default function Project() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="container section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <span className="section-subtitle">Some Things I've Built</span>

            <div className="project-container container">
                <div className="project-tabs">
                    <div className={toggleState === 1 
                        ? "project-button project-active button-flex" 
                        : "project-button button-flex"
                        }
                        onClick={() => toggleTab(1)}
                    >All</div>
                    <div className={toggleState === 2 
                        ? "project-button project-active button-flex" 
                        : "project-button button-flex"
                        }
                        onClick={() => toggleTab(2)}
                    >Web</div>
                    <div className={toggleState === 3 
                        ? "project-button project-active button-flex" 
                        : "project-button button-flex"
                        }
                        onClick={() => toggleTab(3)}
                    >Mobile</div>
                </div>

                <div className="project-sections">
                    <div className={toggleState === 1 
                        ? "project-content project-content-active" 
                        : "project-content" }>
                        <div className="project-card container grid">
                            <img src={WebImg1} className="project-img"/>

                            <div className="project-card-des">
                                <h3 className="featured-project">Featured Project</h3>
                                <span className="project-title">Portfolio Website</span>

                                <div className="project-description">
                                    blah blah blah..
                                </div>

                                <div className="project-stack">
                                    this that this
                                </div>

                                <div className="project-links">
                                    <i class="uil uil-github-alt project-link-icon"></i>
                                    <i class="uil uil-external-link-alt project-link-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 
                        ? "project-content project-content-active" 
                        : "project-content" }>
                        <div>Temp Block 2</div>
                    </div>

                    <div className={toggleState === 3
                        ? "project-content project-content-active" 
                        : "project-content" }>
                        <div>Temp Block 3</div>
                    </div>
                </div>
            </div>
        </section>
    )
}