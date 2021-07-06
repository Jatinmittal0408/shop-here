import React from 'react'
import {Carousel} from '3d-react-carousal'
import A from './C-1.jpg';
import B from './C-2.jpg';
import C from './C-3.jpg';
import D from './C-4.jpg';

export default function CarouselComponent() {
    let slides = [
        <img  src={A} alt="1" />,
        <img  src={B} alt="2" />  ,
        <img  src={C} alt="3" />  ,
        <img  src={D} alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <div>
            <Carousel slides={slides} autoplay={true} interval={500}/>
        </div>
    )
}
