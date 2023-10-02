import React from "react";
import Stack from "./Stack";
import Social from "./Social";
import ReactTyped from "react-typed";
import "./home.css";

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
                    <i className="uil uil-file"></i> Resume
                </div> 
            </div>    

            <Social />      
        </section>
    )
}