import React from 'react'
import imageOne from '../../assets/Lender-Accordion-eVault.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../acoordion/StyleAcoordion.css'


const Acoordion = () => {
  return (
    <div>
      <div className='container mx-auto  sm:max-w-4xl shadow-md rounded-md mt-4 mb-4 p-10'>
        <h2 className='font-bold text-2xl mb-2 test'>Accelerate your digital closing transformation with the platform that's proven</h2>
        <p className='text-md mb-8'>Seize the opportunity to differentiate with digital closings. We'll make sure you and your partners succed.</p>
        <div className='accordion_item flex flex-col sm:flex-row gap-10 '>
          <div>

            {/** Acoordion */}
            <div className='acoordion-item_info border-b'>
              <h2 className='accordion-item_info-title text-xl font-bold py-3'>
                Leaders
                <div className='cross'></div>
              </h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
              <span className='flex gap-3 cursor-pointer mb-4'>
                <a className='font-semibold' href=''>Learn more</a><ArrowForwardIcon className='bg-btnBG rounded-full text-white' />
              </span>
            </div>
            {/**End of acoordion */}

            {/** Acoordion */}
            <div className='acoordion-item_info border-b '>
              <h2 className='accordion-item_info-title text-xl font-bold py-3'>
                Title & Escrow
                <div className='cross'></div>
              </h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
              <span className='flex items-center cursor-pointer gap-3 mb-4'>
                <a className='font-semibold' href=''>Learn more</a><ArrowForwardIcon className='bg-btnBG rounded-full text-white' />
              </span>
            </div>
            {/**End of acoordion */}

            {/** Acoordion */}
            <div className='acoordion-item_info border-b '>
              <h2 className=' accordion-item_info-title text-xl font-bold py-3'>
                Signing Service
                <div className='cross'></div>
              </h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
              <span className='flex gap-3 cursor-pointer mb-4'>
                <a className='font-semibold' href=''>Learn more</a><ArrowForwardIcon className='bg-btnBG rounded-full text-white' />
              </span>
            </div>
            {/**End of acoordion */}

            {/** Acoordion */}
            <div className='acoordion-item_info border-b'>
              <h2 className=' accordion-item_info-title text- font-bold py-3'>
                Notary Signing Agency
                <div className='cross'></div>
              </h2>
              <p className='acoordion_description text-sm mb-2 w-max sm:w-[24em]'>
                Loremipsum Loremipsum Loremipsum
                Loremipsum Loremipsum Loremipsum
              </p>
              <span className='flex gap-3 cursor-pointer mb-4'>
                <a className='font-semibold' href=''>Learn more</a><ArrowForwardIcon className='bg-btnBG rounded-full text-white' />
              </span>
            </div>
          </div>
          {/**End of acoordion */}

          {/**Image section*/}
          <div className='accordion_item'>
            <div className='acoordion_image rounded-xl w-full sm:w-[30em]'
              style={{
                backgroundImage: `url(${imageOne})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: 437,
              }}
            >
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Acoordion
