// packages
import React from 'react';


// components
import '../_styles/contact.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'

import robert from '../assets/contact/robertBlas.png'
import frida from '../assets/contact/frida.jpg'

// Assets
import {name} from '../components/name';

const projectLeader = {name: "Tor Børve Rasmussen", email: "tors...",};
const sponsorLeader = {name: "abc..", email: "abc.."};
const marketingLeader = {name: "", email: ""}

export default function contactpage() {

    return(
        <>
            <Header />
                <section>
                    <div className="grid">
                        <h1> Contact {name} </h1>
                        <p> Any questions? Don't hesitate to contact us! </p> 
                        
                    
                        <div className="container">
                            <div className='contactCard'>
                                <div className='infos'>
                                    <h3>Robert Blaszkiewic</h3>
                                    <h4>Sponsorship Manager</h4>
                                    <h5 id="detailsContact">Tll:        <a href="tell:94131904" >94131904</a></h5>
                                    <h5 id="detailsContact">Email:      <a href="mailto:br@fuelfighter.no" >br@fuelfighter.no</a></h5>
                                </div>
                                <img id="contactIMG" alt="robert " src={robert}/>
                            </div>
                        </div>
                        <div className="container">
                            <div className='contactCard'>
                                <div className='infos'>
                                    <h3>Frida Nymark Englestad</h3>
                                    <h4>Sponsorship Manager</h4>
                                    <h5 id="detailsContact">Tll:        <a href="tell:45513404" >45513404</a></h5>
                                    <h5 id="detailsContact">Email:      <a href="mailto:nestleder@fuelfighter.no" >nestleder@fuelfighter.no</a></h5>
                                </div>
                                <img id="contactIMG" alt="frida " src={frida}/>
                            </div>
                        </div>
                        

                        {/* <p> For sponsor related inquiries, please contact ... </p>

                        <div className='contactCardBody2'>
                            <div className='contactCard'>
                                {sponsorLeader.name}
                            </div>
                            <div className='contactCard'>
                                {marketingLeader.name}
                            </div>

                        </div> */}
                    </div>
                       
                    
                </section>
                
            <Footer />
        
        </>

    )






}