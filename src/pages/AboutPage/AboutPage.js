import { Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
// import historyImg from '../../images/about-main.webp';
// import aboutImg from '../../images/about1.webp';
import aboutImg from '../../images/about.webp';
import about2Img from '../../images/about2.webp';
import Title from '../../components/Title/Title';
import Fade from 'react-reveal/Fade';
const AboutPage = () => {
    const classes = useStyles();
    return (
        <section className={classes.aboutPage}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container style={{ padding: 40 }} direction="column">
                    <Grid item container className={classes.headerContainer}>
                        <Grid item sm={6} container justify="flex-end" style={{ paddingRight: 50 }} alignItems="center">
                            <Fade left>
                                <img src={aboutImg} alt="about" className={classes.image1} />
                            </Fade>
                        </Grid>
                        <Grid item sm={6} container alignItems="center">
                            <div className={classes.textContainer}>
                                <Title title="Lời giới thiệu" />
                                <Typography className={classes.text}>
                                    Ninanail.com là Website bán hàng chính thức của công ty Nina D s.r.o. Công ty với trụ sở chính tại Cộng Hoà Séc,hoạt động
                                    với mục tiêu mang lại những sản phẩm tốt nhất trong nghành Nail và Lashes đến với cộng đồng người Việt Nam trên khắp thế
                                    giới.
                                </Typography>

                                <Typography className={classes.text}>
                                    Được thành lập với người đứng đầu là Master Hong Nhung - Người rất thành công trong ngành Nail và Lashes. Cô đã từng đoạt
                                    được rất nhiều giải thưởng và từng là giám khảo của nhiều cuộc thi quốc tế tại Châu Âu và Châu Á.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.historyContainer}>
                        <Grid item sm={6} container alignItems="center" justify="flex-end">
                            <div className={classes.textContainer}>
                                <Typography className={classes.text}>
                                    Với tâm nguyện đưa ngành Nail và Lashes của người Việt phát triển đúng hướng, Cô và công ty Nina D đã tổ chức rất nhiều khoá
                                    học, sự kiện để mang đến sự chuyên nghiệp, cải thiện tay nghề cho trên 1500 học viên người Việt trên khắp thế giới.
                                </Typography>
                                <Typography className={classes.text}>
                                    Cùng với đó, Cô cùng công ty luôn nghiên cứu và cho ra đời những dòng sản phẩm chất lượng,mang tính thực tế cao để phục vụ
                                    cho công việc của người thợ dễ dàng hơn, cũng như mang đến sự thoải mái cho khách hàng.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item sm={6} style={{ paddingLeft: 40 }}>
                            <Fade right>
                                <img src={about2Img} alt="about" width="500" className={classes.image2} />
                            </Fade>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default AboutPage;
