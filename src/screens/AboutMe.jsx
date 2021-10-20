import React from 'react'
import { Col, Container, Row, Button, Image, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import Typing from 'react-typing-animation'
import FadeIn from 'react-fade-in';


const AboutMe = () => {

 
    return (
        <>

        <FadeIn delay={20}>
        <Container style={{ display: 'flex', flexDirection:'column' }} className="about-container mt-3 mb-5">
            <Row className="about-container-row justify-content-center mt-2 mb-3">
                <h1 className='text-center mt-2 p-2'>About Me</h1>
                

                <Col md={8} lg={8} xs={8} sm={9}>

                    <Typing speed={50}>
                    <div className="about-me-leftbar">
                        <h2>I'am <b>Gazi Adib</b></h2>
                        <p style={{ fontSize: '26px' }}>Software Engineer</p>
                        <p>Bsc in CSE, <small>Daffodil International University</small></p>
                    </div>
                    </Typing>
                   

                    <Button className='pd-2 m-2 bg-dark'>Resume</Button>
                    <hr />

                   <p className="about-short-desc">"I am a software developer who makes awesome and effective personal solution and learning platform like interview questions solutions in <b style={{ color: 'dodgerblue' }}>React</b>. I like <b style={{ color: 'gold' }}>Django</b> For Web development, <b style={{ color: 'lightgreen' }}>Nodejs</b> mostly for API development and <b style={{ color: 'dodgerblue' }}>React</b> for Frontend Application. I Make projects to Learn all my concept and gather proper knowledge...i like to learn tech and share it on my youtube channel" <b style={{ color: 'red'}}>@greatadib</b> <a className="social-link-youtube" href="https://www.youtube.com/c/GreatAdib/featured" target='_blank' rel="noreferrer"><FontAwesomeIcon style={{ color: 'red' }} icon={faYoutube} /></a></p>
                    
                </Col>

                <Col style={{ padding: '20px' }} md={4} lg={4} xs={4} sm={3}>

                    <Image  src={'https://avatars.githubusercontent.com/u/41202696?v=4'} fluid roundedCircle />
                    
                </Col>


            </Row>

            <Row className="justidy-content-center mt-3 mb-2 pt-3 pb-2">
                <Col md={6} lg={4} sm={12}>

                    <Card className={'m-2 p-2 rounded shadow-sm question-solution-detail-card bg-dark'}>
                        <Card.Body>
                            <Card.Title>YouTube</Card.Title>
                            
                            <Card.Text style={{ fontSize: '30px' }}><a className="social-link-youtube" href="https://www.youtube.com/c/GreatAdib/featured" target='_blank' rel="noreferrer"><FontAwesomeIcon style={{ color: 'red' }} icon={faYoutube} /></a></Card.Text>

                        </Card.Body>
                    </Card>

                
                </Col>

                <Col md={6} sm={12} xs={12} lg={4}>

                <Card className={'m-2 p-2 rounded shadow-sm question-solution-detail-card bg-dark'}>
                        <Card.Body>
                            <Card.Title>GitHub</Card.Title>
                            <Card.Text style={{ fontSize: '30px' }}><a className="social-link-youtube" href="https://github.com/GaziAdib" target='_blank' rel="noreferrer"><FontAwesomeIcon style={{ color: 'green' }} icon={faGithub} /></a></Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={6} sm={12} xs={12} lg={4}>
                
                <Card className={'m-2 p-2 rounded shadow-sm question-solution-detail-card bg-dark'}>
                        <Card.Body>
                            <Card.Title>Facebook</Card.Title>
                            <Card.Text style={{ fontSize: '30px' }}><a className="social-link-youtube" href="https://www.facebook.com/profile.php?id=100008158750938" target='_blank' rel="noreferrer"><FontAwesomeIcon style={{ color: 'dodgerblue' }} icon={faFacebook} /></a></Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
        </FadeIn>

        
            
        </>
    )
}

export default AboutMe
