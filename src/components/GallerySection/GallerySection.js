import React from 'react';
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

const GallerySection = () => {
    const classes = useStyles();
    return (
        <section className={classes.gallerySection}>
            <Title title="Gallery" />
            <Grid container className={classes.gridContainer}>
                <Grid item sm={12} container>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery1} alt="galerry" className={classes.image} />
                    </Grid>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery2} alt="galerry" className={classes.image} />
                    </Grid>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery3} alt="galerry" className={classes.image} />
                    </Grid>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery4} alt="galerry" className={classes.image} />
                    </Grid>
                </Grid>
                <Grid item sm={12} container>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery5} alt="galerry" className={classes.image} />
                    </Grid>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery6} alt="galerry" className={classes.image} />
                    </Grid>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery7} alt="galerry" className={classes.image} />
                    </Grid>
                    <Grid item sm={3} className={classes.gridItem}>
                        <img src={gallery8} alt="galerry" className={classes.image} />
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default GallerySection;
