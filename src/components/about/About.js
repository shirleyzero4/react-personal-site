import React from "react";
import "./about.css";
import Info from "./Info";
import Picture from "../../assets/grad-pic.jpg";

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">My Introduction</span>

            <div className="about-container container grid">
                <img src={Picture} className="picture-img"/>

                <div className="about-data">
                    <Info />
                </div>
            </div>
        </section>
    )
}