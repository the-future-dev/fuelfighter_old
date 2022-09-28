// packages
import React from 'react';


// components
import '../_styles/home.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'


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
                        <h1> Contact us </h1>
                        <p> Any questions? Don't hesitate to contact us! </p> 
                        
                    
                        <div className="contactCardBody1">
                            <div className='contactCard'>
                                {projectLeader.name}
                            </div>

                        </div>

                        <p> For sponsor related inquiries, please contact ... </p>

                        <div className='contactCardBody2'>
                            <div className='contactCard'>
                                {sponsorLeader.name}
                            </div>
                            <div className='contactCard'>
                                {marketingLeader.name}
                            </div>

                        </div>
                    </div>
                       
                    
                </section>
                
            <Footer />
        
        </>

    )






}