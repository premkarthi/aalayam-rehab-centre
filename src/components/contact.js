import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import formImage from '../assets/contact/form-image.png';
import React, { useState } from 'react';
const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

function Contact() {
    const [data, setData] = useState({
        name : '',
        email : '',
        message : '',
        buttonEnable : true,
        isError : {
            name : '',
            email : '',
            message : '',
        }   
    })


    const onSubmit = (e) => {
        e.preventDefault();
        const { name , email , message} = data;
        const {isError} = data;

        if(name === ''){
            isError.name =  `Required*`;
        }
        else if(email === ''){
            isError.email =  `Required*`;
        }
        else if(message === ''){
            isError.message =  `Required*`;
        }
        else if(isError.name === '' && isError.message === '' && isError.email === ''){

            emailjs.sendForm('service_wn4u9m9', 'template_2hzhvmw', e.target, 'uPx8_gG-p_fu5DTdc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            toast.success("Successfully mail sent, will connect as soon as possible");

            setTimeout(() => {
                window.location.reload();
            }, 5000); 
        
        }
        else{
            console.log("mail not send");
            toast.error("Something went wrong! try again")
        }
      
        setData({
            isError 
        })
    }

  
    const formValChange = (e) =>{
        const { name , value} = e.target;
        let isError = { ...data.isError };
       
        switch (name) {
            case "name":
                isError.name = value.length < 3 ? "Atleast 3 charactors required" 
                : value.length < 0 ? "Required" 
                : "" ;
                break;
            case "email":
                isError.email = regExp.test(value) ? "" 
                : value.length < 0 ? "Required"
                : "Email address is invalid";
                break;
            case "message":
                isError.message = value.length < 20 ? "Atleast 20 charactors required" 
                : value.length < 0 ? "Required"
                : "";
                break;
            default:
                break;
        }

        setData({
            isError , [name] : value
        })

    }

    const {isError} = data;

    return (
        <div className="container contact-container reveal" id="contact">
            <div className="wrapper">
                <div className="img-wrapper">
                    <img src={formImage} alt="form" loading="lazy"/>
                </div>
                <div className="form-wrapper">
                    <span className="sub-text">Get a Quote</span>
                    <h2 className="title">Contact Us</h2>
                    <form className='formSection' onSubmit={onSubmit} noValidate>
                        <div className='formGroup'>
                            <label>Your Name</label>
                            <input type="text" name='name' value={data.name} autoComplete='off' placeholder="Enter your name" required={true}  onChange={formValChange}/>
                            {
                                isError.name.length > 0 ? <span className=' error'>{isError.name}</span> : ""
                            }
                        </div>
                        <div className='formGroup'>
                            <label>Email Address</label>
                            <input type="text" name='email' value={data.email} autoComplete='off' placeholder="Enter your Email Address" required={true} onChange={formValChange}/>
                            {
                                isError.email.length > 0 ? <span className=' error'>{isError.email}</span> : ""
                            }
                        </div>
                        <div className='formGroup fullwidth'>
                            <label>Your Message</label>
                            <input type="text" name='message' value={data.message} autoComplete='off' placeholder="Requirements" required={true} onChange={formValChange}/>
                            {
                                isError.message.length > 0 ? <span className=' error'>{isError.message}</span> : ""
                            }
                        </div>
                        <div className='formGroup fullwidth'>
                            <button type='submit' className={!data.buttonEnable ? `disable btn` : `btn`}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;
  