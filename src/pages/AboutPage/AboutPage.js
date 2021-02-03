import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import historyImg from '../../images/about-main.jpg';
import aboutImg from '../../images/about1.png';
import Title from '../../components/Title/Title';
import Fade from 'react-reveal/Fade';
const AboutPage = () => {
    const classes = useStyles();
    return (
        <section className={classes.aboutPage}>
            <Grid container sm={12} className={classes.headerContainer}>
                <Grid item sm={6} container justify="flex-end" style={{ paddingRight: 50 }}>
                    <Fade left>
                        <img src={aboutImg} alt="about" />
                    </Fade>
                </Grid>
                <Grid item sm={6} container alignItems="center">
                    <div className={classes.textContainer}>
                        <Title title="Our Nail Bar" />
                        <Typography className={classes.text}>
                            opened its doors, with a team of talented, passionate, caring, creative people dedicated to doing great nails and giving our clients
                            amazing experiences.
                        </Typography>
                        <Typography className={classes.text}>
                            We are always looking for the best, most natural products we can find. When you walk into our doors, you will be greeted with a
                            smile and taken care of by everyone on our team. Every moment of your visit should be enjoyable and relaxed.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container sm={12} className={classes.historyContainer}>
                <Grid item sm={6} container alignItems="center" justify="flex-end">
                    <div className={classes.textContainer}>
                        <Title title="Our History" />
                        <Typography className={classes.text}>We are passionate about our career and have devoted over ten years to the industry.</Typography>
                        <Typography className={classes.text}>
                            When you walk through our doors, you will find that our friendly seasoned staff will be happy to assist you with all your beauty
                            needs.
                        </Typography>
                    </div>
                </Grid>
                <Grid item sm={6}>
                    <Fade right>
                        <img src={historyImg} alt="about" className={classes.image} />
                    </Fade>
                </Grid>
            </Grid>
        </section>
    );
};

export default AboutPage;
