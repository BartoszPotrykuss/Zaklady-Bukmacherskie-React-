import '../style/Footer.css'
import FootItem from './FootItem';

function Footer() {

    const items = [
        { title: 'O firmie', p1: 'Historia', p2: 'Zespół', p3: 'Dołącz do nas' },
        { title: 'Kontakt', p1: 'Telefon', p2: 'Adres e-mail', p3: 'Formularz kontaktowy' },
        { title: 'Informacje', p1: 'Polityka prywatności', p2: 'Regulamin', p3: 'FAQ' }
    ];

    return (
        <footer>
            {items.map((item, index) => (
                <FootItem key={index} tytul={item.title} p1={item.p1} p2={item.p2} p3={item.p3} />
            ))}
        </footer>
    );
}

export default Footer;