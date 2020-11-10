import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Navbar from "./Components/Navbar";
import Footer from "../src/Pages/Footer";

const App = () => {
return (
<>

<Navbar />

<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />

    <Redirect to="/" />

<Home />
</Switch>
<Footer />

</>
);
};

export default App;