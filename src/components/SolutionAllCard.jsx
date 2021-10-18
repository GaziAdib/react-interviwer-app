import React from 'react'
import { Card } from 'react-bootstrap'
import HtmlParser from 'react-html-parser'
import '../App.css';



const SolutionAllCard = ({ s }) => {
    return (
        <>
        
            <Card className={'m-2 p-2 rounded shadow-sm question-solution-detail-card'}>
                <Card.Body>
                    <Card.Title>Question: {s.questionTitle}</Card.Title>
                    <Card.Text className='solution-detail-text'>Solution: <br /> <pre className='pre-text'>{HtmlParser(s.questionSolution)}</pre> </Card.Text>
                    <br />
                    <span className={s.questionType === 'intermediate' ? "solution-question-type-intermediate" : "solution-question-type"}>{s.questionType}</span>
                    <span className="solution-question-language">{s.questionLanguage}</span>
                </Card.Body>
            </Card>
        
        
        </>
    )
}

export default SolutionAllCard
