import React from 'react'
import { Card } from 'react-bootstrap'
import HtmlParser from 'react-html-parser'



const SolutionCard = ({ s }) => {
    return (
        <>
    
            <Card className='m-3 p-3 rounded'>
                <Card.Body>
                    <Card.Title>Question: {s.questionTitle}</Card.Title>
                    <Card.Text>Solution: {HtmlParser(s.questionSolution)}</Card.Text>
                    <span>{s.questionType}</span>
                    <br />
                    <span>{s.questionLanguage}</span>
                </Card.Body>
            </Card>
        
        
        </>
    )
}

export default SolutionCard
