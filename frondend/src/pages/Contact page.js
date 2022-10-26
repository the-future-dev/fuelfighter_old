// packages
import React from 'react';


// components
import '../_styles/contact.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'

import logo from '../assets/logo_black.png'
import pictureMissing from '../assets/team/default.png'

// Assets
import {name} from '../components/name';



export default function contactpage() {

    return(
        <>
            <Header />
                <section>
                    <div className="grid">
                        <h1> Contact {name} </h1>
                        <p> Any questions? Don't hesitate to contact us! </p> 
                        <div className="container">
                            <div className="contactCard">
                                <div className="infos">
                                    <h4 id="generalPositionContact"> General inquiries</h4>
                                    <h5 id="generalDetailsContact"> Email: <a href="mailto:contact@fuelfighter.no" >contact@fuelfighter.no</a></h5>
                                </div>
                                <img id="generalContactIMG" alt="logo " src={logo}/>
                            </div>
                        </div>   
                        

                        <h2 id="keyPeople"> Key people </h2>

                        <div className="container">
                            <div className='contactCard'>
                                <div className='infos'>
                                    <h3>Tor Børve Rasmussen</h3>
                                    <h4>Project Manager</h4>
                                    <h5 id="detailsContact">Tlf:        <a href="tell:94131904" >941 34 655</a></h5>
                                    <h5 id="detailsContact">Email:      <a href="mailto:br@fuelfighter.no" >leder@fuelfighter.no</a></h5>
                                </div>
                                {/* <img id="contactIMG" alt="Picture missing " src={pictureMissing}/>  */}
                            </div>

                            <div className='contactCard'>
                                <div className='infos'>
                                    <h3>Steve Carter Feujo Nomeny</h3>
                                    <h4>Technical leader</h4>
                                    <h5 id="detailsContact">Tlf:        <a href="tell:45513404" >969 95 644</a></h5>
                                    <h5 id="detailsContact">Email:      <a href="mailto:teknisk@fuelfighter.no" >teknisk@fuelfighter.no</a></h5>
                                </div>
                                {/* <img id="contactIMG" alt="Picture missing " src={pictureMissing}/> */}
                            </div>
                        </div>

                        <div className="container">
                            <div className='contactCard'>
                                <div className='infos'>
                                    <h3>Yao Bin David Zhang</h3>
                                    <h4>Marketing leader</h4>
                                    <h5 id="detailsContact">Tlf:        <a href="tell:902 21 802" >902 21 802</a></h5>
                                    <h5 id="detailsContact">Email:      <a href="mailto:david.zhang@fuelfighter.no" >david.zhang@fuelfighter.no</a></h5>
                                </div>
                                {/* <img id="contactIMG" alt="Picture missing " src={pictureMissing}/> */}
                            </div>

                            <div className='contactCard'>
                                    <div className='infos'>
                                        <h3>Adrian Golamini</h3>
                                        <h4>Sponsorship Manager</h4>
                                        {/* <h5 id="detailsContact">Tlf:        <a href="tell: ?" >???</a></h5> */}
                                        <h5 id="detailsContact">Email:      <a href="mailto:adrian.golamini@fuelfighter.no" >adrian.golamini@fuelfighter.no</a></h5>
                                    </div>
                                {/* <img id="contactIMG" alt="Picture missing " src={pictureMissing}/> */}
                            </div>
                        </div>                        


                    </div>
                       
                    
                </section>
                
            <Footer />
        
        </>

    )






}