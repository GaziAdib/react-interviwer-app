import React from 'react'
import { Card } from 'react-bootstrap'
import HtmlParser from 'react-html-parser'
import '../App.css';



const SolutionAllCard = ({ s }) => {
    return (
        <>
    
            <Card className='m-3 p-3 rounded'>
                <Card.Body>
                    <Card.Title>Question: {s.questionTitle}</Card.Title>
                    <Card.Text>Solution: {HtmlParser(s.questionSolution)}</Card.Text>
                    <span className={s.questionType === 'intermediate' ? "solution-question-type-intermediate" : "solution-question-type"}>{s.questionType}</span>
                    <span className="solution-question-language">{s.questionLanguage}</span>
                </Card.Body>
            </Card>
        
        
        </>
    )
}

export default SolutionAllCard
