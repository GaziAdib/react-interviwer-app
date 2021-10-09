import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import InterviewService from '../services/InterviewService';
import firebase from '@firebase/app-compat';
// adding CKEDITOR and HTMl Parser
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  {CKEditor}  from '@ckeditor/ckeditor5-react';
import Loader from '../components/Loader';


const UpdateInterview = ({ match, history }) => {

    // pass key of which one to update

    const key = match.params.key

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionSolution, setQuestionSolution] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [questionLanguage, setQuestionLanguage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getEachKeyDetailData = () => {
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
                setLoading(false)
                 
             })
        }

        getEachKeyDetailData()
    },[key])

    // updateHandler On Button click

    const UpdateInterviewHandler = (e) => {

        e.preventDefault();

        const data  = {
            questionTitle,
            questionSolution,
            questionType,
            questionLanguage
        }

        InterviewService.update(key, data).then(() => {
            history.push('/')
            console.log('updated data')
            setSubmitted(true);
            setLoading(false)

        }).catch(e => {
            console.log(e)
        })
    };


    return <>
     
     {loading ? <Loader /> : (
         <>
         {submitted ? <h4>Form Submitted</h4> : (
         <Container>
         <h2 className='text-center mt-4 mb-4 text-primary'>Create Interview Question</h2>
         <hr />
         <Row className='justify-content-center'>

             <Col md={6} sm={12}>

                 <Form onSubmit={UpdateInterviewHandler}>

                         <Form.Group className="mb-3" controlId="questionTitle">
                             <Form.Label>Question Title</Form.Label>
                             <Form.Control
                              type="text"
                              value={questionTitle}
                              onChange={(e) => setQuestionTitle(e.target.value)}
                              />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="questionSolution">
                             <Form.Label>Question Solution</Form.Label>
                             
                         
                             <CKEditor
                                 editor ={ClassicEditor}
                                 data={questionSolution}
                                 onChange={(e, editor) => {
                                   const data = editor.getData()
                                   setQuestionSolution(data)}
                                 }
                             
                             />
                           
                            
                 
                         </Form.Group>

                         

                         <Form.Group className='mb-2 mt-2'  aria-label="questionType">
                             <Form.Label>Question Type</Form.Label>
                             <Form.Control as='select' value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
                                 <option value=''>Select...</option>
                                 <option value="beginner">Beginner</option>
                                 <option value="intermediate">Intermediate</option>
                                 <option value="advanced">Advanced</option>
                             </Form.Control>
                         </Form.Group>   
                             
                     

                         <Form.Group className='mb-2 mt-2'  aria-label="questionLanguage">
                             <Form.Label>Question Language</Form.Label>
                             <Form.Control as='select' value={questionLanguage} onChange={(e) => setQuestionLanguage(e.target.value)}>
                                 <option value=''>Select...</option>
                                 <option value="java">Java</option>
                                 <option value="python">Python</option>
                                 <option value="javaScript">JavaScript</option>
                                 <option value="php">PHP</option>
                             </Form.Control>
                             
                         </Form.Group>

                     
                     <Button type='submit' className='mt-3 pd-2 mb-2' variant='primary block-outline bg-dark'>Update Questions</Button>


                 </Form>

             </Col>

         </Row>

     </Container>
    )}
 
         </>
     )}
     
 </>
}

export default UpdateInterview
