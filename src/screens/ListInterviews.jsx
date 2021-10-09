import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InterviewService from '../services/InterviewService'
import Loader from '../components/Loader'
import QuestionCard from '../components/QuestionCard'

const ListInterviews = () => {

    const [questions, setQuestions] = useState([])
    const [loading,setLoading] = useState(true);

    
        const onDataChange = (items) => {
            let questions = []
           if(items !== null) {
                items.forEach((item) => {
                    if(item.key !== null) {
                        let key = item.key;
                        let data = item.val();
                        // push data into question array
                        questions.push({
                                key: key,
                                questionTitle: data.questionTitle,
                                questionType: data.questionType
                        });
                        // // sort based on question difficulty 
                        // questions.sort((a, b) => a.questionType - b.questionType ? 1 : -1)
                        
                    }
                });
           }
            setQuestions(questions);
            setLoading(false)
        }
    


    useEffect(() => {
        const getAllQuestion = () => {
            InterviewService.getAll().on("value", onDataChange);

            return () => {
                InterviewService.getAll().off("value", onDataChange)
            }
        };

        getAllQuestion()
    },[])
  


    return (
        <>
        <Container className='mb-5'>
            <Row className='justify-content-center'>
            <h2 className='text-center mt-3 mb-3 pd-2 text-primary'>List Interviews Questions</h2>
            <hr />

                {loading && <Loader />}
              
                {questions.map(q => (
                    <Col md={10} lg={12} sm={12} xs={12} key={q.key}>
                        <QuestionCard q={q} />
                    </Col>
                ))}
            </Row>
        </Container>
            

        </>
    )
}

export default ListInterviews
