import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';
import { useStyles } from './styles';
import aboutSection from '../../images/aboutSection.webp';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const AboutSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.aboutSection}>
            <Grid container>
                <Grid item sm={6} container alignItems="center" justify="flex-end">
                    <Zoom left>
                        <img src={aboutSection} alt="about" className={classes.image} />
                    </Zoom>
                </Grid>
                <Grid item sm={6} container alignItems="center" className={classes.gridRight}>
                    <div className={classes.rightContainer}>
                        <Fade bottom>
                            <Typography className={classes.title}>About us...</Typography>
                        </Fade>
                        <Fade bottom>
                            <Typography className={classes.subTitle}>“Every year we help thousands of women feel and look even more stylish!”</Typography>
                        </Fade>
                        <Fade bottom>
                            <Typography className={classes.text}>
                                When you feel like your daily work routine really exhausted you, feel free to come by.Our professional manicurists will do their
                                best to soothe and calm your body & mind!Choose any color of your nail polish – and we will make it work for you!
                            </Typography>
                        </Fade>
                        <Fade bottom>
                            <Button text="About us" linkTo="/about" />
                        </Fade>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default AboutSection;
