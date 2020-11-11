import React from 'react';
import Sdata from "../OrderPage/Sdata"
import Card from './card';


const Service = () => {
return (
<>

<div className="my-4 ">
    <h1 className="text-center">Menu</h1> 
</div>

<div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
<div className="row gy-4 mt-5 mb-5">

{
    Sdata.map((val, ind) => {
        return <Card Key={ind} imgsrc={val.imgsrc} title={val.title} price={val.price}/>
    })
}

</div>

        </div>
        </div>
        </div> 
        
        
</>
);
};

export default Service;
