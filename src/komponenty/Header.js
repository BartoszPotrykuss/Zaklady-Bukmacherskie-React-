import Image from './Image.js';
import logo from '../img/Logo1.png';
import obstaw from '../img/obstaw.png';
import zaklad from '../img/zaklad.png';
import '../style/Header.css';

function Header() {
    return (
        <header>
            <Image imageSource = {logo} alt = 'logo'/>
            <Image imageSource = {zaklad} alt = 'zaklad'/>
            <Image imageSource = {obstaw} alt = 'obstaw'/>
        </header>
    );
}

export default Header;