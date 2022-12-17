import React, { useEffect, useRef, useState } from 'react';
import { FaUserAlt, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const validate = (formValues) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if ((formValues.name === '')) {
            errors.name = "Name is required!"
        }
        else if (formValues.name.length < 3) {
            errors.name = "Name must be greater than 3 words!"
        }

        if (!formValues.email) {
            errors.email = "Email is required!";
        } 
        else if (!regex.test(formValues.email)) {
            errors.email = "This is not a valid email format!";
        }
        
        if ((formValues.phone === '')) {
            errors.phone = "Mobile number is required!"
        }
        else if (formValues.phone.length > 10 || formValues.phone.length < 10) {
            errors.phone = "Length of Mobile number must be 10";
        }
        
        if (formValues.message === '') {
            errors.message = "Message is required!"
        }

        return errors;
    }

    const options = {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: false,
        theme: 'dark'
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    toast.success("Message has been sent successfully ✔", options);
                    setFormValue({name: '', email: '', phone: '', message: ''})
                }, (error) => {
                    toast.error("Try Again after sometime!", options);
                    console.log(error.text);
                    setFormValue({name: '', email: '', phone: '', message: ''})
                });
        }
    }, [formErrors]);

    return (
        <div id='contact' className='contact p-8 bg-gradient-to-r from-violet-500 to-pink-500 h-auto font-serif  mdm:pt-12'>
            <div className='about-heading text-center text-3xl mdm:text-2xl font-semibold mb-8 flex justify-center items-center space-x-3'>
                <TfiHeadphoneAlt />
                <h1> Get In <span className='text-yellow-500'>Touch</span></h1>
            </div>
            <div data-aos="fade-down" className='contact-heading bg-violet-100 p-2 rounded-xl shadow-xl w-[70%] mdm:w-full m-auto flex justify-center items-center h-auto'>
                <div className='contact-image w-2/5 mdm:hidden'>
                    <img className='h-[100%] w-[90%]' src='https://themes.envytheme.com/puva/wp-content/uploads/2020/09/contact-img-2-1.png' alt='contact' />
                </div>
                <div className='form w-1/2 mdm:w-full'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='input m-6 mdm:m-4 flex items-center mb-0 justify-center space-x-5 bg-violet-200 p-2 rounded-md border-2 border-black focus-within:border-violet-800 focus-within:text-violet-800'>
                            <FaUserAlt />
                            <input type='text' name='name' value={formValue.name} placeholder='Name' className='focus:outline-none w-full bg-violet-200 placeholder:text-black text-black' onChange={onChange} />
                        </div>
                        <p className='text-red-500 text-sm m-6 mdm:m-4 mt-2'>{formErrors.name}</p>
                        <div className='input m-6 mdm:m-4 flex items-center mb-0 justify-center space-x-5 bg-violet-200 p-2 rounded-md border-2 border-black focus-within:border-violet-800 focus-within:text-violet-800'>
                            <MdEmail />
                            <input type='text' name='email' value={formValue.email} placeholder='Email' className='focus:outline-none w-full bg-violet-200 placeholder:text-black text-black' onChange={onChange} />
                        </div>
                        <p className='text-red-500 text-sm m-6 mdm:m-4 mt-2'>{formErrors.email}</p>
                        <div className='input m-6 mdm:m-4 flex items-center mb-0 justify-center space-x-5 bg-violet-200 p-2 rounded-md border-2 border-black focus-within:border-violet-800 focus-within:text-violet-800'>
                            <BsFillTelephoneFill />
                            <input type='text' name='phone' value={formValue.phone} placeholder='Phone' className='focus:outline-none w-full bg-violet-200 placeholder:text-black text-black' onChange={onChange} />
                        </div>
                        <p className='text-red-500 text-sm m-6 mdm:m-4 mt-2'>{formErrors.phone}</p>
                        <div className='input m-6 mdm:m-4 flex items-start mb-0 justify-center space-x-5 bg-violet-200 p-2 rounded-md border-2 border-black focus-within:border-violet-800 focus-within:text-violet-800'>
                            <AiFillMessage className='mt-1' />
                            <textarea type='text' rows="4" cols="20" name='message' value={formValue.message} placeholder='Message' className='focus:outline-none w-full bg-violet-200 placeholder:text-black text-black' onChange={onChange}></textarea>
                        </div>
                        <p className='text-red-500 text-sm m-6 mdm:m-4 mt-2'>{formErrors.message}</p>
                        <div className='btn flex justify-end'>
                            <button type='submit' className='bg-violet-800 p-2 text-white flex items-center justify-evenly rounded-md w-24 mb-4 drop-shadow-xl hover:shadow-2xl hover:bg-violet-600 mr-4'>Submit <FaTelegramPlane /></button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact