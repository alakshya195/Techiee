import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className='services' id="box">
    
    <Carousel infiniteLoop autoPlay showStatus={false}
    interval={1000}>

        <div>
            <img  id = "img" src="https://source.unsplash.com/random/1600x900/?services,laptop" alt="Item1"/>
            <p className='legend'>Full Stack</p>
       
        </div>

        <div>
            <img id = "img" src="https://source.unsplash.com/random/1600x900/?tech,laptop" alt="Item2"/>
            <p className='legend' >Peer to peer support</p>
       
        </div>

        <div>
            <img id = "img" src="https://source.unsplash.com/random/1600x900/?development,laptop" alt="Item3"/>
            <p className='legend'>24*7 Availability</p>
       
        </div>
    </Carousel>


    </div>
  )
}

export default Services
