import React from 'react'
import imageOne from '../../assets/banner-img.webp'


const Acoordion = () => {
  return (
    <div>
      <div className='container mx-auto  sm:max-w-4xl shadow-md rounded-md mt-4 mb-4 p-10'>
        <h2 className='font-bold text-2xl mb-2'>Accelerate your digital closing transformation with the platform that's proven</h2>
        <p className='text-md mb-8'>Seize the opportunity to differentiate with digital closings. We'll make sure you and your partners succed.</p>
        <div className='accordion_box flex flex-col sm:flex-row gap-10 '>
          <div>
            {/** Acoordion */}
            <div className='acoordion_item border-b'>
              <h2 className='text-xl font-bold py-3'>Leaders</h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
              <span className='flex gap-3 mb-2'>
                 <a className='font-semibold' href=''>Learn more</a><span className='bg-btnBG rounded-full text-white'>Icon</span>
              </span>
            </div>

            {/** Acoordion */}
            <div className='acoordion_item border-b '>
              <h2 className='text-xl font-bold py-3'>Title & Escrow</h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
              <span className='flex items-center gap-3 mb-2'>
                 <a className='font-semibold' href=''>Learn more</a><span className='bg-btnBG rounded-full text-white '>Icon</span>
              </span>
            </div>
            {/** Acoordion */}
            <div className='acoordion_item border-b '>
              <h2 className='text-xl font-bold py-3'>Signing Service</h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
            </div>

            {/** Acoordion */}
            <div className='acoordion_item border-b'>
              <h2 className='text- font-bold py-3'>Notary Signing Agency</h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
            </div>
          </div>

          <div className='rounded w-full sm:w-[50em]'>
            <img className='bg-no-repeat  p-5 rounded-2xl h-[30em] w-full sm:w-[50em]'
              src={imageOne}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acoordion
