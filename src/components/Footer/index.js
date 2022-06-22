import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';
import './styles.scss';

export function Footer() {
    return (


        <footer>
            <div className='email'>
                studioghibli762@gmail.com
            </div>

            <div className='email_icon'>
                <SiMinutemailer />
            </div>

            <ul className="social">
                <li><a href="https://www.facebook.com/GhibliUSA/" target="_blank" rel="noreferrer"><BsFacebook /></a></li>
                <li><a href="https://www.instagram.com/ghibliusa/" target="_blank" rel="noreferrer"><BsInstagram /></a></li>

            </ul>
        </footer>
    )
}