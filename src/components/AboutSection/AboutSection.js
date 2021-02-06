import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';
import { useStyles } from './styles';
import aboutSection from '../../images/class.webp';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

const AboutSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.aboutSection}>
            <Grid container>
                <Grid item sm={6} container alignItems="center" justify="flex-end">
                    <Zoom left>
                        <div className={classes.imageContainer}>
                            <img src={aboutSection} alt="about" className={classes.image} />
                        </div>
                    </Zoom>
                </Grid>
                <Grid item sm={6} container alignItems="center" className={classes.gridRight}>
                    <div className={classes.rightContainer}>
                        <Fade bottom>
                            <Title title="Nail Class" />
                        </Fade>
                        <Fade bottom>
                            <Typography className={classes.subTitle}>“We have trained hundreds of great skills each year.”</Typography>
                        </Fade>
                        <Fade bottom>
                            <Typography className={classes.text}>Our classes train two main parts: </Typography>
                            <Typography className={classes.text}>- Eyelash transplantation.</Typography>
                            <Typography className={classes.text}>- Nails.</Typography>
                        </Fade>
                        <Fade bottom>
                            <Button text="More detail" linkTo="/about" />
                        </Fade>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default AboutSection;
