import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { LoadImages } from "./utils/images"
/* eslint-disable-next-line */
import reportWebVitals from "./utils/reportWebVitals"
import "./assets/css/index.css"
import "./assets/css/anims.css"
import "./assets/css/fonts.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadImages />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
