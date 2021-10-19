import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InterviewService from '../services/InterviewService'
import Loader from '../components/Loader'
import QuestionCard from '../components/QuestionCard'
import FadeIn from 'react-fade-in';

const ListInterviews = () => {

    const [questions, setQuestions] = useState([])
    const [loading,setLoading] = useState(true);

    
    

    useEffect(() => {
        getAllQuestion()
    },[])


    const onDataChange =  (items) => {
        let questions = []
   
            items.forEach((item) => {
                if(item.key) {
                    let key = item.key;
                    let data = item.val();
                    // push data into question array
                    questions.push({
                            key: key,
                            questionTitle: data.questionTitle,
                            questionType: data.questionType
                    });
                    // // sort based on question difficulty 
                    questions.sort((a, b) => a.key - b.key ? 1 : -1)  
                }
            });
     
        setQuestions(questions);
        setLoading(false)
    }

    const getAllQuestion = () => {
         InterviewService.getAll().on("value", onDataChange);

         return () => {
            InterviewService.getAll().off("value", onDataChange);
          };

    };
  


    return (
        <>
        
        <FadeIn>
        <Container className='mb-5'>
            <Row className='justify-content-center'>
            <h2 className='text-center mt-3 mb-3 pd-2 text-primary'>List Interviews Questions</h2>
            <hr />

                {loading && <Loader />}
              
                {questions.length > 0 ? (questions.map(q => (
                    <Col md={10} lg={12} sm={12} xs={12} key={q.key}>
                        <QuestionCard q={q} />
                    </Col>
                ))): (<h2> No data On Database ! please Add Some Data then come here...<b>Thank You</b> </h2>)}
            </Row>
        </Container>
        </FadeIn>

        
            

        </>
    )
}

export default ListInterviews
