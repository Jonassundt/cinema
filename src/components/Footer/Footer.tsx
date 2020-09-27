import React, { useState } from 'react';

import styles from './footer.module.css';

function Footer() {
    const [credits, setCredits] = useState(false);
    const startCredits = () => {
        setCredits(true);
        setTimeout(() => window.scroll({
            top: 4000,
            behavior: 'smooth'
        }), 600)
        setTimeout(() => setCredits(false), 20000);
    }

    if (credits) {
        return (
            <div className={styles.CreditFooter} >
                <div className={styles.Fade}></div>
                <div className={styles.CreditText}>
                    <div className={styles.Crawl}>
                        <div className={styles.Title}>
                            <p>Episode II</p>
                            <h1>MODERNE HJEMMEKINO</h1>
                        </div>
                        <p>Prosjektet er utviklet av Team 60, og er ment for å være en web-basert filmplakat-
                        utstilling som en homage til noen av de beste filmene noensinne laget.</p>
                        <p>Dette valget ble tatt grunnet gruppemedlemmenes felles kjærlighet for gode filmer,
                        og et ønske om å hylle både komponistene og regissørene.</p>
                    </div>
                </div></div>)
    }
    return (
        /* Simple footer component.
        * Returns footer containing text and an image.
        */
        <div className={styles.Footer} onClick={startCredits}>
            <div className={styles.Row}>
                <div className={styles.About}>NTNU Datateknologi 2020</div>
                <div className={styles.Link}>Rulletekst {"--->"}</div>
            </div>
            <img src="icons/react.svg" alt="" width="60" height="60" />

        </div>

    );
}

export default Footer;
