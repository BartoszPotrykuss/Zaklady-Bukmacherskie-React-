import '../style/Footer.css'
import FootItem from './FootItem';

function Footer() {
    return (
        <footer>
            <FootItem tytul = "O firmie" p1 = "Historia" p2 = "Zespół" p3 = "Dołącz do nas" />
            <FootItem tytul = "Kontakt" p1 = "Telefon" p2 = "Adres e-mail" p3 = "Formularz kontaktowy" />
            <FootItem tytul = "Informacje" p1 = "Polityka prywatności" p2 = "Regulamin" p3 = "FAQ" />
        </footer>
    );
}

export default Footer;