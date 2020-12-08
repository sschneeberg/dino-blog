import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//can also put this in App and leave index clean
const post = {
  title: "The End Is Near",
  author: "Scaredy Stegosaurus",
  body: "Giant asteroid incoming!!!!!!!!",
  comments: [
    "Yea, right",
    "This is ridiculous! I can't believe dinos read this.",
    "Finally someone with the truth!!",
    "There's absolutely no way.",
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App post={post} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
