"use client"

import React from 'react'
import styles from "@/app/contact/contact.module.css"
import { Mulish } from 'next/font/google'
import { useState } from 'react'

const mulish = Mulish({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: "swap"
})
const ContactForm = () => {
    const [status,setStatus] = useState(null)
    const [user,setUser] =  useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })



    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setUser((prevUser) => ({...prevUser, [name]:value}));

    }

const handleSubmit = async(e)=> {
    e.preventDefault();


    try{
const response = await fetch("/api/Contact",{
    method:"POST",
    headers:{"Content_Type":"application/json"},
    body:JSON.stringify({
   username:user.username,
   email:user.email,
   phone:user.phone,
   message:user.message
    })

}



)

if(response.status===200){
    setUser({
        username:"",
        email:"",
        phone:"",
        message:""
    })
    setStatus("success")
}else {
    setStatus("error")
}
    } catch(e){
console.log(e)
    }

}



    return (
        <form onSubmit={handleSubmit} className={styles.contact_form}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter Your Name
                    <input value={user.username} required onChange={handleChange} type="text" name='username' id='username' placeholder='Enter your name' className={mulish.className} />


                </label>

            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter Your Email
                    <input value={user.email} required onChange={handleChange} type="text" name='email' id='email' placeholder='Enter your email' className={mulish.className} />


                </label>

            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter Your Phone Number
                    <input value={user.phone} required onChange={handleChange} type="text" name='phone' id='phone' placeholder='Enter your phone number' className={mulish.className} />


                </label>

            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea vlaue={user.message} required onChange={handleChange} type="text" name='message' id='message' placeholder='Message' className={mulish.className} />


                </label>

            </div>


            <div>

            {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type='submit' className={mulish.className}>Send message</button>
            </div>
        </form>
    )
}

export default ContactForm