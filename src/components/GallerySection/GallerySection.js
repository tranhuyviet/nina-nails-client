import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Title from '../Title/Title';
import { useStyles } from './styles';
// import ZoomInIcon from '@material-ui/icons/ZoomIn';

import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

const GallerySection = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const images = [
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612600297/nina-nails/0A390BB1-F69F-44BE-B2A1-E17947F2DB8A-1_lfqcum.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601176/nina-nails/7B732936-83F6-4E44-966B-DB556F3B695D_sxjbm7.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612600753/nina-nails/3E81F0AB-0063-422E-9F1C-BE05128D9297_nxxt5d.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612600753/nina-nails/2B4DE671-33C1-4202-955D-47F8DF6C1FBD_adgcew.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612600754/nina-nails/9E1CE8F7-6118-4AA6-BB5D-A8E2F00B03AC_uydetk.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612600755/nina-nails/8EA14D0C-E2A4-4E47-A60A-DB269D5FCD94_tfg2om.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601074/nina-nails/3F86C82E-5605-4C09-8797-482B27ED1C78_rgbifr.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601175/nina-nails/4D1EFF57-3359-483A-876F-E65F776C32E0_ahlu5l.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601347/nina-nails/EE5A21EE-A7C6-4F5E-A014-4E312EAD9636_gagxpw.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601405/nina-nails/0EE514B6-B66F-4A57-A876-69CCCE386EB0_thlqjs.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601452/nina-nails/9C53FD0F-AD97-40FC-A557-2B5663E203D4_f9n8ib.jpg',
        },
        {
            url:
                'https://res.cloudinary.com/dzaxf70c4/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1612601476/nina-nails/E43DF271-EB4D-4F1E-9D23-67A645CE6752_jreopb.jpg',
        },
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
