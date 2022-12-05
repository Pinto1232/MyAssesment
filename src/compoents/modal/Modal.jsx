import React from 'react'
import '../modal/modalStyle.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Modal = ({ open, btnOnclose }) => {
    if (!open) return null;
    return (
        <div className='overlay relative  flex justify-center items-center bg-blend-multiply '>
            <div className=' modalcontainer p-3  w-[800px] absolute shadow-xl rounded bg-white sm:mt-[-19em] h-[680px] overflow-y-auto'>
                <div className=' flex justify-between '>
                    <div className='mb-4 p-5'>
                        <h2 className='text-black text-2xl font-semibold'>Request a Demo</h2>
                    </div>
                    <div className='text-black text-2xl btnClose'>
                        <FontAwesomeIcon onClick={btnOnclose}  icon="fa-regular fa-xmark text-black" />
                    </div>
                </div>

                <form className='p-5 flex flex-col '>
                    <div className='flex w-full gap-4 mb-4'>
                        <div className='flex flex-col w-full'>
                            <div className='mb-8'>
                                <label className='text-sm'>First name*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2' />
                            </div>

                            <div className='mb-8'>
                                <label className='text-sm'>Business Email*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2' />
                            </div>


                            <div className='mb-8'>
                                <label className='text-sm'>Industry (Selection)</label>
                                <select class="outline-none px-2 border rounded w-full h-12 bg-white mt-2" name="" id="">
                                    <option value="default" selected="">Please select</option>
                                    <option value="">Academia/Research</option>
                                    <option value="">Aerospace & Defence</option>
                                    <option value="">Architecture & Construction</option>
                                    <option value="">Electronics & Semiconductors</option>
                                    <option value="">Energy</option>
                                    <option value="">FMCG</option>
                                    <option value="">Industrial</option>
                                    <option value="">Manufactoring</option>
                                    <option value="">Marine</option>
                                    <option value="">Other</option>
                                    <option value="">Packaging</option>
                                    <option value="">Pharma</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex flex-col w-full'>
                            <div className='mb-8'>
                                <label className='text-sm'>Last name*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2' />
                            </div>

                            <div className='mb-8'>
                                <label className='text-sm'>Company Name*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2' />
                            </div>

                            <label className='text-sm mb-2'>What Area Are You Working In?</label>
                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Simulation</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Testing</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Design</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mb-4'>
                            <label className='mb-8'>What Is The Biggest Engineering Challenge You Are Facing?</label>
                            <div className='w-full flex gap-4 mt-4'>
                                <input type="checkbox" />
                                <label>Domain experts are leaving​ the business</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Underutilised data from test & simulation</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Speed of development is too slow</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Too slow to market</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Running too many tests</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Missing engineering deadlines</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Difficulty modelling complex physics</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox" />
                                <label>Difficulty predicting data</label>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>


                    <div className='w-full flex mb-16'>
                        <div className='flex  items-center  gap-4 '>
                            <input type="checkbox" />
                            <label className='-mb-12'>
                                Subscribe to our latest marketing offers and updates and insights. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
                            </label>
                        </div>
                    </div>

                    <div className='w-full mb-8'>
                        <p>
                            Subscribe to our latest marketing offers and updates and insights. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
                        </p>
                    </div>


                    <div className='flex'>
                        <div>
                            <a className='text-white font-bold bg-tinyText p-4 pl-14 pr-14  rounded-[50px] sm:w-2/2' href='#'>SUBMIT</a>
                        </div>
                        <div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
