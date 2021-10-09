import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';

const QuestionCard = ({ q }) => {
    return (
        <>
        <Link className='question-card-link' to={`/list/${q.key}/detail`}>
            <Card className='question-card shadow-sm m-2 p-2 rounded'>
                <Card.Body>
                    <Card.Title>Question: {q.questionTitle} <span style={{ float:'right' }} className={q.questionType === 'intermediate' ? "solution-question-type-intermediate" : "solution-question-type"}><small>{q.questionType.slice(0,3)}</small></span></Card.Title>
                </Card.Body>
            </Card>
        </Link>
           
        
        </>
    )
}

export default QuestionCard
