import React, {useState, useEffect} from 'react'
import firebase from '@firebase/app-compat';
import { Card } from 'react-bootstrap';
import '../App.css';
import HtmlParser from 'react-html-parser';

const SolutionDetail = ({ match }) => {

    // by which key the detail will be shown
    const key = match.params.key;

    // states to show values in JSX an set database data
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionSolution, setQuestionSolution] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [questionLanguage, setQuestionLanguage] = useState('');
    


    useEffect(() => {

        const getDetailSolutionData = () => {
            firebase.database().ref('/interviews').child(key).on('value', snapshot => {
                const q_title =  snapshot.val().questionTitle
                const q_solution =  snapshot.val().questionSolution
                const q_type =  snapshot.val().questionType
                const q_language =  snapshot.val().questionLanguage

                // set state value

                setQuestionTitle(q_title)
                setQuestionSolution(q_solution)
                setQuestionType(q_type)
                setQuestionLanguage(q_language)
                 
             })
        }

        getDetailSolutionData()


    }, [key])


    return (
        <>
            <Card className='question-solution-detail-card shadow-sm m-4 p-4 rounded'>
                <Card.Body>
                    <Card.Title>Question: {questionTitle}</Card.Title>
                    <Card.Text>Solution: { HtmlParser(questionSolution) }</Card.Text>
                    <span>{questionType}</span><br />
                    <span>{questionLanguage}</span>
                </Card.Body>
            </Card>

            
        </>
    )
}

export default SolutionDetail
