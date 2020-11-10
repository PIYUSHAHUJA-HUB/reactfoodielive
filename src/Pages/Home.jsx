import React from 'react';

import Common from '../Common';
import web from "../images/img3.jpg";

const Home = () => {
return (
<>
 
<Common 
name= "Eat Healthy and Fresh Food"
imgsrc={web}
visit="/service"
btname="Order Now"
description = "We Deliver Fast and Fresh food at Home"
/>

</>
);
};

export default Home;