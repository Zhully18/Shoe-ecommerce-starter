import React from 'react'
import contact_img from '../../assets/contact.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <h2>NEED HELP ?</h2>
            <div className="contact_container">
                <div className="conact_left">
                    <p>At Nika Shoes, we’re committed to bringing you the latest styles and trusted brands, combined with the comfort you need to get through the day.</p>
                    <p>If you have inquiries about any of our products or services or need assistance, do not hesitate to chat or call us.</p>
                </div>
                <div className="contact_right">
                    <img src={contact_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact