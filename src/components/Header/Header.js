import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Fade from 'react-reveal/Fade';
import Button from '../Button/Button';

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <div className={classes.headerContainer} />

            <Grid container alignItems="center" className={classes.gridContainer}>
                <div className={classes.textContainer}>
                    <Fade left duration={1000}>
                        <Typography className={classes.title}>Get your nails an extravagant look</Typography>
                    </Fade>
                    <Fade left delay={200} duration={1100}>
                        <Typography className={classes.subtitle}>
                            Ready for the party. Give a finishing touch by polishing your nails. Fashion with Nina
                        </Typography>
                    </Fade>
                    <Fade left delay={400} duration={1200}>
                        <Button text="Shop Now" linkTo="/products" />
                    </Fade>
                </div>
            </Grid>
        </div>
    );
};

export default Header;
