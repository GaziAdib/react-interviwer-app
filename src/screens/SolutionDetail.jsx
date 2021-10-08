import React, {useState, useEffect} from 'react'
import firebase from '@firebase/app-compat';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import HtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';



const SolutionDetail = ({ match, history }) => {

    // by which key the detail will be shown
    const key = match.params.key;

    // states to show values in JSX an set database data
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionSolution, setQuestionSolution] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [questionLanguage, setQuestionLanguage] = useState('');
    const [loading,setLoading] = useState(true);
    


    useEffect(() => {
            const getDetailSolutionData =  () => {
                if (key != null) {
                    firebase.database().ref('/interviews').child(key).on('value', snapshot => {
                       
                        const q_title = snapshot.val().questionTitle
                        const q_solution = snapshot.val().questionSolution
                        const q_type = snapshot.val().questionType
                        const q_language = snapshot.val().questionLanguage
                        // set state value
        
                        setQuestionTitle(q_title)
                        setQuestionSolution(q_solution)
                        setQuestionType(q_type)
                        setQuestionLanguage(q_language)
                        setLoading(false)

                     })
                } else {
                    setQuestionTitle('')
                    setQuestionSolution('')
                    setQuestionType('')
                    setQuestionLanguage('')
                    setLoading(false)
                }     
            }

            getDetailSolutionData()
        
    }, [key])



    // delete Handler
    const deleteHander = () => {
        const secretPass = 'adib1204'
        if (window.confirm('Are you sure to delete ?')) {

            const password = prompt('Enter Password to Delete...')

            if(password === secretPass) {
                firebase.database().ref('/interviews').child(key).remove().then(() => {
                    console.log('removed')
                    history.push('/')
                    setLoading(false)
                }).catch(e => {
                    console.log(e)
                    setLoading(false)
                })
            }
             else {
                 return 'password require to delete'
             }
             
        } else {
            return false
        }
        
    }



    return (
        <>
        {loading ? <Loader /> : (
            <>
            <Container>
            <Row className="justify-content-left">
                <Col md={6} sm={12} lg={8}>
                    <Card className='question-solution-detail-card shadow-sm m-4 p-4 rounded'>
                        <Card.Body>
                            <Card.Title>Question: {questionTitle}</Card.Title>
                            <hr />
                            <Card.Text>Solution: { HtmlParser(questionSolution) }</Card.Text>
                            <span className={questionType === 'intermediate' ? "solution-question-type-intermediate" : "solution-question-type"}>{questionType}</span>
                            <span className="solution-question-language">{questionLanguage}</span>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className='justify-content-left m-2 p-2'>
              
              <span>
                <Link to={`/list/${key}/update`}>
                   <Button variant="block outline text-light bg-primary" className='mt-2 ml-2 mr-2 p-3 mb-2'>Update</Button>
                </Link>
                </span>
              <span>
              <Button  className='mt-2 ml-2 mr-2 p-3 mb-2' variant="block-outline text-light bg-danger" onClick={deleteHander}>Delete</Button>
            </span>  
                
              
                
                

            </Row>

        </Container>
            
            </>
        )}
        
        </>
    )
}

export default SolutionDetail
