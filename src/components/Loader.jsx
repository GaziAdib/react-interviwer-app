import React from 'react'
import { Spinner } from 'react-bootstrap'
import '../App.css';

const Loader = () => {
    return (
        <>
            <Spinner className="spinner-loader" animation='grow' />
        </>
    )
}

export default Loader
