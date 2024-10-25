'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Form = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <section className='form_section' id='form'>
            <div className='form_image1'>
                <Image src='/images/diamondgreygrey.svg' alt='diamondgreygrey' layout='fill' />
            </div>
            <div className='form_image2'>
                <Image src='/images/diamondbluegrey.svg' alt='diamondbluegrey' layout='fill' />
            </div>
            <div className='form_content-container'>
                <h3 className='inter-bold'>REQUEST A QUOTE</h3>
                <p style={{ fontSize: '18px', color: '#3C71B8' }} className='roboto-bold'>Reach out to us now for an estimate on your home or business flooring needs!</p>
                <p className='roboto-light'>Based in Melbourne, Grind Crete are able to serve not only the entire CBD and the broader Melbourne metropolitan region but also extend our services to the Mornington Peninsula.</p>
                <div className='form_container'>
                    <form id="quote-form" className="quote-form" action="https://formsubmit.co/info@grindcrete.com.au" method="POST">
                        <div className="quote_form-fields">
                            <div className="input-group">
                                <input type="text" id="name" name="name" placeholder="Name" required />
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                                <input type="number" id="square-metres" name="square_metres" placeholder="Square Meters" required />
                            </div>
                            <div className="input-group">
                                <select aria-label="desired service" id="desired-service" name="desired_service" required>
                                    <option value="">Desired Service</option>
                                    <option value="service1">Grind/Seal/Polish</option>
                                    <option value="service2">Epoxy</option>
                                    <option value="service3">Pavilion Finish</option>
                                </select>
                            </div>
                        </div>
                        <div className="submit-container">
                            <button aria-label="form submit button" className="form_button" type="submit">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Form