import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error404Page = () => {

    return (
        <>
         
         <Container className='error-container'>
                <h1 className="main-error-head">Opps</h1>
                <h1><b>404</b> Page Not Found</h1>
                <span>
                    <Link to='/'>
                        <Button className="homebtn">Go To Homepage</Button>
                    </Link>
                </span>
         </Container>

        </>


    )
}

export default Error404Page
