import React from 'react';
import "./ContactUs.css";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const ContactUs = () => {
    return (
        <div className='contact-main'>
            <h1 className='contact-heading'>Contact Us</h1>
            <p className='contact-para'>Any question or remarks? Just write us a message!</p>
            <div className='contact-container'>
                <div className='contact-left'>
                    <h3 className='contact-left-heading'>Contact Information</h3>
                    <p className='contact-left-para'>Fill us the form and our Team will get back to you within 24 hours</p>
                    <div>
                        <IoIosCall />
                        <p>9109330696</p>
                    </div>
                    <div>
                        <IoIosMail />
                        ecommerce@gmail.com
                    </div>
                    <div>
                        <FaAddressCard />
                        Vijay Nagar, Indore
                    </div>
                    <div>
                        <RiFacebookLine />
                        <RiTwitterLine />
                        <RiInstagramLine />
                        <RiLinkedinLine />
                    </div>
                </div>
                <div className='contact-right'>
                    <form>
                        <div className='userName'>
                            <div>
                                <label>First Name</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='main-phone'>
                            <div>
                                <label>main</label>
                                <input type='email' />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input type='number' />
                            </div>
                        </div>
                        <div className='message'>
                            <div>
                                <p>Message</p>
                                <textarea placeholder='Write your message'>

                                </textarea>
                            </div>
                        </div>
                        <button className='contact-btn'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;