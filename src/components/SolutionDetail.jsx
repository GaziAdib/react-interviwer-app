import React, {useState, useEffect} from 'react'
import firebase from '@firebase/app-compat';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import HtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

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
        <Container>
            <Row className="justify-content-left">
                <Col md={6} sm={12} lg={4}>
                    <Card className='question-solution-detail-card shadow-sm m-4 p-4 rounded'>
                        <Card.Body>
                            <Card.Title>Question: {questionTitle}</Card.Title>
                            <hr />
                            <Card.Text>Solution: { HtmlParser(questionSolution) }</Card.Text>
                            <span>{questionType}</span><br />
                            <span>{questionLanguage}</span>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className='justify-content-left m-2 p-2'>
              
                <Link to={`/list/${key}/update`}>
                    <Button className='update-button mt-2 p-2 mb-2 btn btn-success'>Update</Button> 
                </Link>

            </Row>

        
        </Container>
            

            
        </>
    )
}

export default SolutionDetail
