import { Grid, Paper, TextField, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { useStyles } from './styles';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
                        <Grid item sm={6} container className={classes.infoContainer}>
                            <Grid item sm={12}>
                                <Zoom bottom duration={1000}>
                                    <Grid item container alignItems="center" className={classes.infoGroup}>
                                        <PhoneIphoneIcon className={classes.icon} />
                                        <Typography className={classes.text}>+420 773 630 666</Typography>
                                    </Grid>
                                </Zoom>
                                <Zoom bottom delay={200} duration={1000}>
                                    <Grid item container alignItems="center" className={classes.infoGroup}>
                                        <EmailOutlinedIcon className={classes.icon} />
                                        <Typography className={classes.text}>hongnhung.belash@gmail.com</Typography>
                                    </Grid>
                                </Zoom>
                                <Zoom bottom delay={400} duration={1000}>
                                    <Grid item container alignItems="center" className={classes.infoGroup}>
                                        <LocationOnOutlinedIcon className={classes.icon} />
                                        <Typography className={classes.text}>Chvalovice 95, 669 02 Znojmo, Czech Republic</Typography>
                                    </Grid>
                                </Zoom>
                                <Zoom bottom delay={600} duration={1000}>
                                    <Grid item container alignItems="flex-start" className={classes.infoGroup}>
                                        <QueryBuilderOutlinedIcon className={classes.icon} />
                                        <div>
                                            <Typography className={classes.text}> Mon-Sat: 10 am - 6 pm</Typography>
                                            <Typography className={classes.text}>Sunday: 10 am - 5 pm</Typography>
                                        </div>
                                    </Grid>
                                </Zoom>
                            </Grid>
                            <Grid item sm={12} container alignItems="flex-end" justify="center">
                                <Fade bottom delay={800}>
                                    <Tooltip title="Facebook">
                                        <a href="https://www.facebook.com/kikicoco" target="_blank" rel="noreferrer">
                                            <FacebookIcon className={classes.socialIcon} />
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Instagram" style={{ margin: '0 30px' }}>
                                        <a href="https://instagram.com/hongnhungnails?igshid=16fa2l6m4849j" target="_blank" rel="noreferrer">
                                            <InstagramIcon className={classes.socialIcon} />
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="WhatsApp">
                                        <a href="https://api.whatsapp.com/send?phone=00420773630666" target="_blank" rel="noreferrer">
                                            <WhatsAppIcon className={classes.socialIcon} />
                                        </a>
                                    </Tooltip>
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </section>
    );
};

export default ContactPage;
