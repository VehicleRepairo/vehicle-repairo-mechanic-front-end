import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./pages/Navbar/Navbar.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementBiId("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>s
    </React.StrictMode>
)

