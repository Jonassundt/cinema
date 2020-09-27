import React from 'react';

import styles from './footer.module.css';

function Footer() {
    return (
        /* Simple footer component.
        * Returns footer containing text and an image.
        */
        <div className={styles.Footer}>
            <div >
                NTNU Datateknologi 2020
        </div>
            <img src="icons/react.svg" alt="" width="60" height="60" /></div>

    );
}

export default Footer;
