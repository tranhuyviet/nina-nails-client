import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Title from '../../components/Title/Title';
import { useStyles } from './styles';
import classes1 from '../../images/classes1.webp';
import classes2 from '../../images/classes2.webp';
import classes3 from '../../images/classes3.webp';
import classes4 from '../../images/classes4.webp';
import classes5 from '../../images/classes5.webp';

const ClassPage = () => {
    const classes = useStyles();
    return (
        <section className={classes.classPage}>
            <Title title="Classes" />
            <br />
            <Grid container justify="center" className={classes.gridContainer}>
                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <img src={classes1} alt="classes" className={classes.image} />
                    </Paper>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <img src={classes2} alt="classes" className={classes.image} />
                    </Paper>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <img src={classes3} alt="classes" className={classes.image} />
                    </Paper>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <img src={classes4} alt="classes" className={classes.image} />
                    </Paper>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <img src={classes5} alt="classes" className={classes.image} />
                    </Paper>
                </Grid>
            </Grid>
        </section>
    );
};

export default ClassPage;
