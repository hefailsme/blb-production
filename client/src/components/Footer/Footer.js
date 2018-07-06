import React from 'react';
import { Footer, Col, Container, Row, Button} from 'mdbreact';
import './Footer.css'

const Foot = () => (
            <Footer color="unique-color-dark" className="page-footer font-small pt-0">
                <div className="pink">
                    <Container className="text-left">
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="4" className="text-center text-md-left mb-2 mb-md-0">
                            <img src={require('../../assets/images/BLB_Bulb_Final.png')} alt="bl-bulb" height="30"/>   
                            </Col>
                            <Col md="4" className="text-center text-md-center mb-2 mb-md-0">
                            <img src={require('../../assets/images/BLB_TypeOnly_Wht.png')} alt="bl-type-wht" height="30"/> 
                            </Col>
                            <Col md="4" className="text-center text-md-right mb-6 mb-md-0">
                                <a className="yt-ic" href="https://www.youtube.com/user/sightthesiren/featured" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube white-text mr-lg-4"></i></a>
                                <a className="ins-ic" href="http://instagram.com/brightlightsbasement" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                                <a className="fb-ic ml-0" href="http://facebook.com/brightlightsbasement" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a className="tw-ic" href="http://twitter.com/basementbright" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>ABOUT OUR ENGINEERS</strong></h6>
                            <hr className="pink accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <p>To learn more about our two engineers, Roger Camero & Erol Ulug, click the link button below.</p>
                            <Button block href="/engineer" onClick="/engineer" active size="sm" color="pink" rounded>READ MORE</Button>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>CONTACT ROGER CAMERO</strong></h6>
                            <hr className="pink accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <a href="mailto:rogercamero@icloud.com"><p><i className="fa fa-envelope mr-3"></i> rogercamero@icloud.com </p></a>
                            <a href="https://open.spotify.com/user/hefailsme/playlist/35KhQ3ljd64WeZqSP6wlVR?si=C-GwWin9Ts-B2CzlX3UEag" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-spotify mr-3"></i> SPOTIFY AUDIO RESUME </p></a>
                            <a href="http://instagram.com/hefailsme" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-instagram mr-3"></i> HE FAILS ME INSTAGRAM </p></a>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>CONTACT EROL ULUG</strong></h6>
                            <hr className="pink accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <a href="mailto:rollieulug@hotmail.com"><p><i className="fa fa-envelope mr-3"></i> rollieulug@hotmail.com </p></a>
                            <a href="https://open.spotify.com/user/wtsuujoudpxvihk1xygtnao67/playlist/7rBJaTWKcU8Pp0882TjP0P?si=G-r_BXBZRMSz6Lzs4L1RNg" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-spotify mr-3"></i> SPOTIFY AUDIO RESUME </p></a>
                            <a href="http://instagram.com/rollieulug" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-instagram mr-3"></i> EROL "ROLLIE" ULUG INSTAGRAM </p></a>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>STUDIO CONTACT</strong></h6>
                            <hr className="pink accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '250px'}}/>
                            <a href="mailto:brightlightsbasement@gmail.com"><p><i className="fa fa-envelope mr-3"></i> brightlightsbasement@gmail.com</p></a>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container className="pink-text" fluid>
                       <a className="pink-text">  &copy; {(new Date().getFullYear())} Copyright: </a> <a className="pink-text" href="https://www.brightlightsbasement.com">HE FAILS ME</a>
                    </Container>
                </div>
            </Footer>
        )

export default Foot

