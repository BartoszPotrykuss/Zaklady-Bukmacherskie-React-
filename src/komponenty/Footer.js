import '../style/Footer.css'
import Foot1 from './Foot1';

function Footer() {
    return (
        <footer>
            <Foot1 tytul = "O firmie" p1 = "Historia" p2 = "Zespół" p3 = "Dołącz do nas" />
            <Foot1 tytul = "Kontakt" p1 = "Telefon" p2 = "Adres e-mail" p3 = "Formularz kontaktowy" />
            <Foot1 tytul = "Informacje" p1 = "Polityka prywatności" p2 = "Regulamin" p3 = "FAQ" />
        </footer>
    );
}

export default Footer;