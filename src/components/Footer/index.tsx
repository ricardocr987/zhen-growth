import { FaTwitter, FaDiscord } from 'react-icons/fa'
const s = require('./Footer.css');

export const Footer = () => {
return (
        <div className="color__section">
            <ul className='row'>
                <li><a href="#"><i><FaTwitter /></i></a></li>
                <li><a href="#"><i><FaDiscord /></i></a></li>
            </ul>
        </div>
    );
}

export default Footer;