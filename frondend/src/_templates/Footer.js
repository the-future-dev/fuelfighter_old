import React from 'react';

import '../_styles/footer.css'

import logo_black_exp from '../assets/logo_black_expanded.png'
import logo_white_exp from '../assets/logo_black_expanded.png'



export default function Footer({floating}) {
    return (
        <footer>
            <ul>
                <li><a id="logo"><img alt="Fuel Fighter: Home" src={floating ? logo_white_exp : logo_black_exp} /></a></li>  
            </ul>
            <ul>
                <li><a href="mailto:leder@fuelfighter.no" >Contact</a></li>
                <p>© {(new Date().getFullYear())} Fuel Fighter NTNU</p>
            </ul>
        </footer>
    )
}