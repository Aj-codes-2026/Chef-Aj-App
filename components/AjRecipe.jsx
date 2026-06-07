import React from "react";
import ReactMarkdown from "react-markdown";

export default function AjRecipe(props) {
  const [copied, setCopied] = React.useState(false);

  function copyRecipe() {
    navigator.clipboard.writeText(props.recipe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="suggested-recipe-container">
      <div className="recipe-header">
        <h2>Chef Aj Recommends</h2>
        <button className="copy-btn" onClick={copyRecipe}>
          {copied ? "Copied" : "Copy Recipe."}
        </button>
      </div>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
      <hr />
      <div className="img-container">
        <img src="/chef.png" alt="logo" />
      </div>
    </section>
  );
}
