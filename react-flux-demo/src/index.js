import React from "react";
import ReactDOM from "react-dom";
import {TextArea} from 'flux-monaco-editor';

const dom = (
  <TextArea
    rows="20"
    value="Type here"
  />
)

ReactDOM.render(
  dom, 
  document.getElementById("root")
);
