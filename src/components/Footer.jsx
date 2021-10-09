import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4} lg={4} sm={4}>
                        <h6 className='text-primary mt-2 p-2'><FontAwesomeIcon icon={faLocationArrow} /> jurain, Dhaka-1204, Bangldesh</h6>
                          
                    </Col>
                    <Col md={4} lg={4} sm={4}>
                        <p className='text-light mt-2 p-2'>developed By <b>GaziAdib</b></p>
                    </Col>
                    <Col md={12} lg={4} sm={4}>
                        <Row className='mt-2 p-2'>
                            <Col md={3} lg={2} sm={12}>
                                <a className="social-link-gmail" href="https://www.gmail.com" target='_blank' rel="noreferrer"><FontAwesomeIcon style={{ color: 'yellow' }} icon={faEnvelope} /></a>
                            </Col>

                            <Col md={3} lg={2} sm={12}>
                                <a className="social-link-youtube" href="https://www.youtube.com/c/GreatAdib/featured" target='_blank' rel="noreferrer"><FontAwesomeIcon style={{ color: 'red' }} icon={faYoutube} /></a>
                            </Col>

                            <Col md={3} lg={2} sm={12}>
                                <a className="social-link-facebook" href="https://www.facebook.com/profile.php?id=100008158750938" target='_blank' rel="noreferrer"> <FontAwesomeIcon style={{ color: 'lightblue' }} icon={faFacebook} /></a>
                            </Col>

                            <Col md={3} lg={2} sm={12}>
                                <a  href="https://github.com/GaziAdib" target='_blank' rel="noreferrer"> <FontAwesomeIcon style={{ color: 'white' }} icon={faGithub} /></a>
                            </Col>


                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
