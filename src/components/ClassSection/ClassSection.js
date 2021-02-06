import React from 'react';
import { useStyles } from './styles';
// import classImage from '../../images/class-bg.png';
import { Grid, Typography } from '@material-ui/core';
import class1Image from '../../images/class.webp';
import class2Image from '../../images/class2.jpg';

import Flip from 'react-reveal/Flip';
import Title from '../Title/Title';
import Button from '../Button/Button';

const ClassSection = () => {
    const classes = useStyles();
    return (
        <section className={classes.classSection}>
            <Grid container className={classes.gridContainer}>
                <Grid item sm={12} container>
                    <Grid item sm={6} className={classes.imageContainer}>
                        <img src={class1Image} alt="class1" className={classes.image} />
                    </Grid>
                    <Grid item sm={6} className={classes.textContainer}>
                        <Flip top>
                            <Title title="Nail Online class" />
                            <Typography className={classes.title2}>with Hong Nhung</Typography>
                            <Typography className={classes.date}>22.9.2020 - 06.11.2020</Typography>
                            <ul className={classes.ul}>
                                <li className={classes.li}>Acrylic</li>
                                <li className={classes.li}>Shaping</li>
                                <li className={classes.li}>Ombre</li>
                                <li className={classes.li}>Pink and White</li>
                                <li className={classes.li}>Encapulate</li>
                                <li className={classes.li}>Acrylic Designs</li>
                                <li className={classes.li}>3D Basic</li>
                            </ul>
                            <Button text="More detail" />
                        </Flip>
                    </Grid>
                </Grid>
                {/* <Grid item sm={12} container style={{ marginTop: 50 }}>
                    <Grid item sm={6} className={classes.textContainer}>
                        <Flip top>
                            <Title title="Gel Designs Online Class" />
                            <Typography className={classes.title2}>with Hong Nhung</Typography>
                            <Typography className={classes.date}>28.10.2020 - 11.11.2020</Typography>
                            <ul className={classes.ul}>
                                <li className={classes.li}>Gel Basic + Russian Manicure</li>
                                <li className={classes.li}>Pink and White with Gel</li>
                                <li className={classes.li}>Ombre Gel</li>
                                <li className={classes.li}>Encapsulate Gel</li>
                                <li className={classes.li}>Gel Salon Designs(fast and easy)</li>
                                <li className={classes.li}>Gel Design Basic</li>
                            </ul>
                        </Flip>
                    </Grid>
                    <Grid item sm={6} className={classes.imageContainer}>
                        <img src={class2Image} alt="class2" className={classes.image} />
                    </Grid>
                </Grid> */}
            </Grid>
        </section>
    );
};

export default ClassSection;
