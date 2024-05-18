import '../style/FootItem.css';

import React from 'react';

const CopyToClipboard = () => {

    const copyToClipboard = async (event) => {
        try {
            const textToCopy = event.target.title;
            await navigator.clipboard.writeText(textToCopy);
            alert('Tekst został skopiowany do schowka!');
        } catch (err) {
            console.error('Błąd przy kopiowaniu do schowka:', err);
        }
    };

    return (
        <div className="footItem">
            <h2>Kontakt</h2>
            <br />
            <a onClick={copyToClipboard} title='123 456 789'>Telefon</a>
            <br />
            <a onClick={copyToClipboard} title='footbet@gmail.com'>Adres e-mail</a>
            <br />
        </div>
    );
};

export default CopyToClipboard;
