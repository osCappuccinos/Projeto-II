import React from 'react';

import './imagesGallery.css'

const ImagesGallery = ({ images, handleThumbnailClick, selectedImage }) => (
    <div className="photos">
        <div className="small-photos">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.file.url}
                    alt={`Product Image ${index}`}
                    onClick={() => handleThumbnailClick(image)}
                    className={selectedImage === image ? 'selected' : ''}
                />
            ))}
        </div>
        <div className="big-photo">
            <img src={selectedImage ? selectedImage.file.url : images[0].file.url} alt="Product Image" />
        </div>
    </div>
);

export { ImagesGallery }