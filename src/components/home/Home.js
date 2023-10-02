import React from "react";
import Stack from "./Stack";
import Social from "./Social";
import ReactTyped from "react-typed";
import "./home.css";
import Resume from "../../assets/Shirley_Resume_June (2).pdf";

export default function Home() {
    return (
        <section className="home section" id="home">
            <div className="container grid">
                <p className="intro-hi">
                    Hi, my name is
                </p>

                <h1 className="intro-name">
                    Shirley Nguyen.
                </h1>

                <ReactTyped 
                    className="intro-job"
                    strings={
                        [
                            "Web Developer.",
                            "Front-End Developer.",
                            "Software Developer."
                        ]
                    }
                    typeSpeed={100}
                    loop
                />

                <Stack /> 

                <div className="button resume-button">
                    <a href={Resume} target="_blank"><i className="uil uil-file"></i> Resume</a>
                </div> 
            </div>    

            <Social />      
        </section>
    )
}