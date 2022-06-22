import './styles.scss';

import logo from '../../logo_branca.svg';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>

            <Link to="/">

                <div className='logo'>
                    <img src={logo} alt="logo"></img>
                </div>
            </Link>
        </header>
    )
}