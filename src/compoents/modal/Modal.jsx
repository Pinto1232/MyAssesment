import React, { useState, useEffect } from 'react'
import '../modal/modalStyle.css'
import CloseIcon from '@mui/icons-material/Close'



const Modal = ({ open, btnOnclose }) => {
    const initialFormValues = {
        firstName: "", businessEmail: "", compaName: "",
        lastName: "", CheckBoxSimulation: "", checkBoxAllFields: ""
    }
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErros, setFormsErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormsErrors(validateForm(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErros);
        if (Object.keys(formErros).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErros])

    const validateForm = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.firstName) {
            errors.firstName = "Please complete this required field."
        }
        if (!values.lastName) {
            errors.lastName = "Please complete this required field."
        }
        if (!values.businessEmail) {
            errors.businessEmail = "Please complete this required field.";
        }
        else if (!regex.test(values.businessEmail)) {
            errors.businessEmail = "This is not a valid business email format!"
        }
        if (!values.compaName) {
            errors.compaName = "Please complete this required field."
        }

        if (!values.CheckBoxSimulation) {
            errors.CheckBoxSimulation = "Please select at least one option."
        }

        if (!values.checkBoxAllFields) {
            errors.checkBoxAllFields = "Please complete all required fields."
        }
        return errors;
    }

    if (!open) return null;
    return (
        <div className='overlay relative  flex justify-center items-center bg-blend-multiply '>
            <div className=' modalcontainer p-3 z-50 w-[800px] absolute shadow-xl rounded bg-white sm:mt-[-2em] h-[900px] overflow-y-auto'>
                {/* <pre className='bg-blue text-white flex flex-col'>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <div className=' flex justify-between '>
                    <div className='mb-4 p-5'>
                        <h2 className='text-black text-2xl font-semibold'>Request a Demo</h2>
                    </div>
                    <div className='text-black text-2xl btnClose'>
                        <CloseIcon onClick={btnOnclose} className='text-black text-3xl cursor-pointer' />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='p-5 flex flex-col' >
                    <div className='flex flex-col w-full gap-4 mb-4'>
                        <div className='flex flex-col w-full'>
                            <div className='mb-8'>
                                <label className='text-sm'>First name*</label>
                                <input type="text" className=' outline-none px-2 border rounded w-full h-12 mt-2'
                                    name="firstName"
                                    value={formValues.firstName}
                                    onChange={handleInputChange}
                                />
                                <label className='text-sm labelWarning'>{formErros.firstName}</label>
                            </div>

                            <div className='mb-8'>
                                <label className='text-sm'>Business Email*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2'
                                    name="businessEmail"
                                    value={formValues.businessEmail}
                                    onChange={handleInputChange}
                                />
                                <label className='text-sm labelWarning'>{formErros.businessEmail}</label>
                            </div>


                            <div className='mb-8'>
                                <label className='text-sm'>Industry (Selection)</label>
                                <select className="outline-none px-2 border rounded w-full h-12 bg-white mt-2" name="" id="">
                                    <option value="industry-select" >Please select</option>
                                    <option value="Academia/Research">Academia/Research</option>
                                    <option value="Aerospace & Defence">Aerospace & Defence</option>
                                    <option value="Architecture & Construction">Architecture & Construction</option>
                                    <option value="Electronics & Semiconductors">Electronics & Semiconductors</option>
                                    <option value="Energy">Energy</option>
                                    <option value="fmcg">FMCG</option>
                                    <option value="FMCG">Industrial</option>
                                    <option value="Manufactoring">Manufactoring</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Other">Other</option>
                                    <option value="Packaging">Packaging</option>
                                    <option value="Pharma">Pharma</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex flex-col w-full'>
                            <div className='mb-8'>
                                <label className='text-sm'>Last name*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2'
                                    name="lastName"
                                    value={formValues.lastName}
                                    onChange={handleInputChange}
                                />
                                <label className='text-sm labelWarning'>{formErros.lastName}</label>
                            </div>

                            <div className='mb-8'>
                                <label className='text-sm'>Company Name*</label>
                                <input type="text" className='outline-none px-2 border rounded w-full h-12 mt-2'
                                    name="compaName"
                                    value={formValues.compaName}
                                    onChange={handleInputChange}
                                />
                                <label className='text-sm labelWarning'>{formErros.compaName}</label>
                            </div>

                            <label className='text-sm mb-2'>What Area Are You Working In?</label>
                            <div className='w-full flex gap-4'>
                                <input type="checkbox" className='focus:ring-0'
                                    name="CheckBoxSimulation"
                                    value={formValues.CheckBoxSimulation}
                                    onChange={handleInputChange}
                                />
                                <label>Simulation</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox"
                                    name="CheckBoxSimulation"
                                    value={formValues.CheckBoxSimulation}
                                    onChange={handleInputChange}
                                />
                                <label>Testing</label>
                            </div>

                            <div className='w-full flex gap-4'>
                                <input type="checkbox"
                                    name="CheckBoxSimulation"
                                    value={formValues.CheckBoxSimulation}
                                    onChange={handleInputChange}
                                />
                                <label>Designing</label>
                            </div>
                            <label className='text-sm labelWarning'>{formErros.CheckBoxSimulation}</label>
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
                        <label className='text-sm labelWarning'>{formErros.checkBoxAllFields}</label>
                    </div>


                    <div className='flex'>
                        <div>
                            <input type="submit" value="SUBMIT" className="text-white font-bold bg-tinyText p-4 pl-14 pr-14 cursor-pointer  rounded-[50px] sm:w-2/2" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
