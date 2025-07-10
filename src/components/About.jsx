import React from "react";
import blogData from "../data/blog";


function About({ image, about }) {
    const imageSrc = image ||  "https://via.placeholder.com/215";
    return (
        <aside>
            <img src={imageSrc} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;