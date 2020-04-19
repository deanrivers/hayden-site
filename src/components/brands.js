import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import adidasImage from '../assets/Brands/adidas.png'
import atletiImage from '../assets/Brands/atleti.png'
import audiImage from '../assets/Brands/audi.png'
import cocacolaImage from '../assets/Brands/cocacola.png'
import espnImage from '../assets/Brands/espn.png'
import mlsImage from '../assets/Brands/mls.png'
import nyrbImage from '../assets/Brands/nyrb.png'
import redbullImage from '../assets/Brands/redbull.png'
import rmaImage from '../assets/Brands/rma.png'
import tmobileImage from '../assets/Brands/tmobile.png'
import univisionImage from '../assets/Brands/univision.png'
import usaImage from '../assets/Brands/usa.png'


{/* <Carousel
autoPlay={true}
infiniteLoop={true}
showThumbs={false}
showArrows={false}
swipeable={true}
interval={2000}
> */}

let Brands = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        dots:false,
        draggable:false,
        fade:false,
        infinite:true,
        swipe: true
        
      };
    return(

        <div id="brand-carousel">
            {/* <h1>Brands I've worked with.</h1>
            <br/>
            <br/> */}
            <Slider {...settings}
            >
                <img src={adidasImage}/>
                <img src={atletiImage}/>
                <img src={audiImage}/>
                <img src={cocacolaImage}/>
                <img src={espnImage}/>
                <img src={mlsImage}/>
                <img src={nyrbImage}/>
                <img src={redbullImage}/>
                <img src={rmaImage}/>
                <img src={tmobileImage}/>
                <img src={univisionImage}/>
                <img src={usaImage}/>
            </Slider>
            
        </div>
    )
}

export default Brands