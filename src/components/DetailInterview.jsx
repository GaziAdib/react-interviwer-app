import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InterviewService from '../services/InterviewService'
import SolutionCard from './SolutionCard'


const DetailInterview = () => {

    const [solutions, setSolutions] = useState([])

    const onDataChange = (items) => {
        let solutions = []

        items.forEach((item) => {
            let key = item.key;
            let data = item.val();
            solutions.push({
                key: key,
                questionTitle: data.questionTitle,
                questionSolution: data.questionSolution,
                questionType: data.questionType,
                questionLanguage: data.questionLanguage
            });

        });

        setSolutions(solutions);
    }

  

    useEffect(() => {
        const getAllSolution = () => {
            InterviewService.getAll().on("value", onDataChange);

            return () => {
                InterviewService.getAll().off("value", onDataChange)
            }
        };

        getAllSolution()
    },[])

   


    return (
        <>
        <Container>
            <Row className='justify-content-center'>
            <h2 className='text-center mt-3 mb-3 pd-2 text-primary'>List Interviews Solutions</h2>
            <hr />

                {solutions.map(s => (
                    <Col md={12} lg={12} sm={12} key={s.key}>
                        <SolutionCard s={s} />
                    </Col>
                ))}
            </Row>
        </Container>
            

        </>
    )
}
export default DetailInterview
