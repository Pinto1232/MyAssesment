import React, { useState } from 'react'
import backgroundImage from '../assets/banner-img.webp'
import LogoCarousel from './carousel/LogoCarousel'
import Modal from './modal/Modal'
import SpeakNowModal from './modal/SpeakNowModal'

const Monolith_Hero_banner = () => {
    const [myModel, setmyModel] = useState(false)
    const [myModalTwo, setmyModalTwo] = useState(false)

    return (
        <div className='bannerBg flex items-center'
            style={{
                backgroundColor: '#000',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundImage})`,
                height: 600,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity: '1.2',
            }}
        >
            <div className='container mx-auto  sm:max-w-7xl  text-start'>
                <h3 className='text-tinyText font-bold text-xl mb-2'>Monolith</h3>
                <h2 className='text-5xl font-semibold text-white mb-4 sm:w-full w-[400px] leading-[1.2]'>Test less. Learn more.</h2>
                <p className='text-white text-lg font-semibold  sm:w-[750px] leading-[1.9] mb-20'>Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</p>

                {/*button*/}
                <div className='container mx-auto cursor-pointer flex gap-4 w-full mb-28'>
                    <div>
                        <a onClick={() => setmyModel(true)} className='text-white font-bold bg-tinyText p-5 pl-14 pr-14 rounded-[50px] sm:w-auto w-full hover:opacity-90 hover:bg-btnBG ' href='#'>REQUEST DEMO</a>
                    </div>
                    <div>
                        <a onClick={() => setmyModalTwo(true)} className='text-white border-2 border-tinyText p-5 pl-14 pr-14 rounded-[50px] font-bold hover:bg-tinyText hover:text-black' href='#'>SPEAK TO OUR TEAM</a>
                    </div>
                </div>

                {/*Slider*/}
                <div className='container mx-auto'>
                    <LogoCarousel />
                </div>

                {/*Modal*/}
                <Modal open={myModel} btnOnclose={() => setmyModel(false)} />
                <SpeakNowModal openModal={myModalTwo} btnOncloseModal={() => setmyModalTwo(false)}/>
            </div>
        </div>
    )
}

export default Monolith_Hero_banner
