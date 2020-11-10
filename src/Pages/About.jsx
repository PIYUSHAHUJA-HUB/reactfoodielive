import React from 'react';
import web from "../images/home.gif";
import Common from "../Common"

const About = () => {
return (
<>

<Common 
name= "We are here to serve best food"
imgsrc={web}
visit="/contact"
btname="Contact Us"
description ="Add Desciption"
/>

</>
);
};

export default About;