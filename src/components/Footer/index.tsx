import * as React from 'react';
import { FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa'
const s = require('./index.css');

export const Footer = () => {
return (
        <section className="color__section">
            <ul className='column'>
                <li><a href="#"><i><FaTwitter /></i></a></li>
                <li><a href="#"><i><FaDiscord /></i></a></li>
            </ul>
        </section>
    );
}

export default Footer;