import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Title/Title';
import { useStyles } from './styles';
// import ZoomInIcon from '@material-ui/icons/ZoomIn';

import gallery1 from '../../images/gallery1.webp';
import gallery2 from '../../images/gallery2.webp';
import gallery3 from '../../images/gallery3.webp';
import gallery4 from '../../images/gallery4.webp';
import gallery5 from '../../images/gallery5.webp';
import gallery6 from '../../images/gallery6.webp';
import gallery7 from '../../images/gallery7.webp';
import gallery8 from '../../images/gallery8.webp';

import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

const GallerySection = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const images = [
        { url: gallery1 },
        { url: gallery2 },
        { url: gallery3 },
        { url: gallery4 },
        { url: gallery5 },
        { url: gallery6 },
        { url: gallery7 },
        { url: gallery8 },
    ];

    const handleImageClick = (index) => {
        setImgIndex(index);
        setIsOpen(true);
    };

    const hadleClose = () => {
        setIsOpen(false);
    };

    return (
        <section className={classes.gallerySection}>
            <Title title="Gallery" />
            <Grid container className={classes.gridContainer}>
                <Grid item sm={12} container>
                    {images.map((image, index) => (
                        <Grid item sm={3} className={classes.gridItem} key={index}>
                            <img src={image.url} alt="galerry" className={classes.image} onClick={() => handleImageClick(index)} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            {isOpen && <Lightbox images={images} onClose={hadleClose} startIndex={imgIndex} />}
        </section>
    );
};

export default GallerySection;
