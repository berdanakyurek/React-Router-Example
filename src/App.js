import Nav from "./Nav.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import About from "./About.js";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import React from "react";


function App() {
    return (
        <div>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/about" element={<About/>} exact />
                    <Route path="/contact" element={<Contact/>} exact />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
