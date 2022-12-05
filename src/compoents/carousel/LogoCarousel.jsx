import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../carousel/Style.css'


class logoCarousel extends Component {
    render() {
        const sliderSettings = {
            dots: true,
            Infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className='w-9/12 pl-20 gap-4'>
                <Slider {...sliderSettings}>
                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hubfs/Aptar%20Logo.svg' />
                    </div>
                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hubfs/bae-systems_logo.svg' />
                    </div>
                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hubfs/Siemens_logo.svg' />
                    </div>
                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png?width=280&height=48&name=JOTA_logo.png' />
                    </div>
                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hubfs/honda_logo.svg' />
                    </div>

                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png' />
                    </div>

                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src=' https://www.monolithai.com/hs-fs/hubfs/mercedes-benz_logo.png?width=344&height=86&name=mercedes-benz_logo.png' />
                    </div>

                    <div className='container'>
                        <img className='w-[148px] h-[38px]' src='https://www.monolithai.com/hs-fs/hubfs/Kautex_Textron_Logo_Bw-1.png?width=193&height=58&name=Kautex_Textron_Logo_Bw-1.png' />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default logoCarousel

