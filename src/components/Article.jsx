import React from "react";
import blogData from "../data/blog";


function Article({ title, date, preview }) {
    const Postdate = date || "January 1, 1970";
    return (
        <article>
            <h3> {title} </h3>
            <small> {Postdate} </small>
            <p> {preview} </p>
        </article>
    )
}

export default Article;