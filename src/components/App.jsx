import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About 
        image="https://via.placeholder.com/150"
        aboutText="This is a simple blog application built with React."
      />
      <ArticleList />
    </div>
  );
}

export default App;
