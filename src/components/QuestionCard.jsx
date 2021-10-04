import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';

const QuestionCard = ({ q }) => {
    return (
        <>
        <Link className='question-card-link' to={'/detail'}>
            <Card className='question-card shadow-sm m-4 p-4 rounded'>
                <Card.Body>
                    <Card.Title>Question: {q.questionTitle}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
           
        
        </>
    )
}

export default QuestionCard
