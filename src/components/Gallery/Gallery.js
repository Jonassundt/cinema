import React from 'react';

import './gallery.css';

function Thumbnail() {
    return (
        <div className="Thumbnail">
            Artwork
        </div>
    )
}

function Gallery() {
    return (
        <div className="Gallery">
            {[0, 1, 2, 3].map(image => <Thumbnail />)}
            <p>
                TODO: Show all artworks here, for the user to hover and click
            </p>
        </div>
    );
}

export default Gallery;
