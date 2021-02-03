import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { useStyles } from './styles';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

const ContactPage = () => {
    const classes = useStyles();
    return (
        <section className={classes.contactPage}>
            <Title title="Contact us" />
            <Grid container style={{ marginTop: 40 }} justify="center">
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item sm={6} className={classes.formContainer}>
                            <form>
                                <TextField variant="outlined" label="Name" type="text" fullWidth color="info" />
                                <TextField variant="outlined" label="Email" type="email" fullWidth style={{ marginTop: 20 }} />
                                <TextField variant="outlined" label="Message" multiline rows={6} fullWidth style={{ margin: '20px 0' }} />
                                <Button text="Send" />
                            </form>
                        </Grid>
                        <Grid item sm={6} className={classes.infoContainer}>
                            <Zoom bottom duration={1000}>
                                <Grid item container alignItems="center" className={classes.infoGroup}>
                                    <PhoneIphoneIcon className={classes.icon} />
                                    <Typography className={classes.text}>+358 12 345 6789</Typography>
                                </Grid>
                            </Zoom>
                            <Zoom bottom delay={200} duration={1000}>
                                <Grid item container alignItems="center" className={classes.infoGroup}>
                                    <EmailOutlinedIcon className={classes.icon} />
                                    <Typography className={classes.text}>info@nina.com</Typography>
                                </Grid>
                            </Zoom>
                            <Zoom bottom delay={400} duration={1000}>
                                <Grid item container alignItems="center" className={classes.infoGroup}>
                                    <LocationOnOutlinedIcon className={classes.icon} />
                                    <Typography className={classes.text}>123 Fifth Avenue, New York, NY 10160</Typography>
                                </Grid>
                            </Zoom>
                            <Zoom bottom delay={600} duration={1000}>
                                <Grid item container alignItems="flex-start" className={classes.infoGroup}>
                                    <QueryBuilderOutlinedIcon className={classes.icon} />
                                    <div>
                                        <Typography className={classes.text}>Mon-Fri: 9 am - 6 pm</Typography>
                                        <Typography className={classes.text}>Satuday: 9 am - 4 pm</Typography>
                                        <Typography className={classes.text}>Sunday: 10 am - 2 pm</Typography>
                                    </div>
                                </Grid>
                            </Zoom>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </section>
    );
};

export default ContactPage;
