import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
return (
<>

<div className ="col-md-4 col-10 mx-auto">
<div className="card" >
  <img src={props.imgsrc} class="card-img-top card-img-border" alt="{props.title}"  />
  <div className="card-body">
    
  <div class="container">
  <div class="row">
    <div class="col-sm">
    <h5 className="card-title font-weight-bold ">{props.title} </h5>
    </div>
   
    <div class="col-sm">
    <h5 className="card-title font-weight-bold ">Price : {props.price}rs</h5>
    </div>
  </div>
</div>

   
    
    
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    <div class="container">
  <div class="row">
   
   
    <div class="col-sm">
    <NavLink to="#" className="btn btn-primary text-left-margin">Add To Cart</NavLink> 
    </div>
  </div>
</div>
   
     
     
  
  </div>
</div>

</div>

</>
);
};

export default Card;