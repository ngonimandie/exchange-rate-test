import React from 'react'
import ContactSendButton from './ContactSendButton'
import emailjs from 'emailjs-com';
import apiKeys from '../utils/emailkeys';
function Calculator() {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(`service_rgnzk6s`, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then((result) => {alert("Message Sent, We will get back to you shortly", result.text);},
        (error) => {alert("An error occurred, Please try again", error.text);});
        };
    return (
        <div className="contact-body py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6" p-2>
                    <h2 className="text-center">Reach Out</h2>
                    <div>
                        <h3>Email</h3>
                        <p>info@afrosoft.co.zw</p>
                    </div>
                    <div>
                        <h3>Call Us</h3>
                        <p>+263 242 796 941</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>3rd Floor, Beverly Court, Corner Nelson Mandela Ave. & Simon Muzenda St</p>
                    </div>
                </div>
                <div className="col-md-6 p-2">
                    <h2 className="text-center">Send Message</h2>
                            <form onSubmit={e => {handleSubmit(e)}} class="row g-3">
                            <div class="col-12">
                                <textarea name="name" id="name" placeholder= "Name"  className="form-control" rows="1"></textarea>
                            </div>
                            <div class="col-12">
                                <textarea name="surname" id="surname" placeholder= "Surname"  className="form-control" rows="1"></textarea>
                            </div>
                            <div class="col-12">
                                <textarea name="email" id="email" placeholder= "Email Address"  className="form-control" rows="1"></textarea>
                            </div>
                            
                            <div class="col-12">
                                <textarea name="message" id="message"  className="form-control" rows="4"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn contact-send-button btn-primary message-button round-corners ">Send</button>
                            </div>
                                
                                
                                {/*<div class="col-12">
                                <div type="submit" class="btn contact-send-button btn-primary message-button round-corners ">
                                <ContactSendButton label="Send" mailto="mailto: info@afrosoft.co.zw" />
                                </div>
                                </div>
                                */}
                                
                            </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
