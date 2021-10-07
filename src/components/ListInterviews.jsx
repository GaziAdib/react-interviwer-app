import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InterviewService from '../services/InterviewService'
import QuestionCard from './QuestionCard'

const ListInterviews = () => {

    const [questions, setQuestions] = useState([])

    
        const onDataChange = (items) => {
            let questions = []
    
           if(items !== null) {
                items.forEach((item) => {
                    if(item.key !== null) {
                        let key = item.key;
                        let data = item.val();
        
                        questions.push({
                                key: key,
                                questionTitle: data.questionTitle
                        });
                        
                    }
                });
           }
    
            setQuestions(questions);
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



    // // get Data again after delete prop
    // const getMyData = () => {
    //     InterviewService.getAll().on("value", onDataChange);
    //     return () => {
    //         InterviewService.getAll().off("value", onDataChange)
    //     }
    // }

   


    return (
        <>
        <Container>
            <Row className='justify-content-center'>
            <h2 className='text-center mt-3 mb-3 pd-2 text-primary'>List Interviews Questions</h2>
            <hr />

                {questions.map(q => (
                    <Col md={12} lg={12} sm={12} key={q.key}>
                        <QuestionCard q={q} />
                    </Col>
                ))}
            </Row>
        </Container>
            

        </>
    )
}

export default ListInterviews
