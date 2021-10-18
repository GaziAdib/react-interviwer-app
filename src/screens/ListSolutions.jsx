import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InterviewService from '../services/InterviewService'
import SolutionAllCard from '../components/SolutionAllCard'
import Loader from '../components/Loader'


const ListSolutions = () => {

    const [solutions, setSolutions] = useState([])
    const [loading,setLoading] = useState(true);
    
    
    useEffect(() => {
        getAllSolution()
    },[])

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
        setLoading(false)
    }

    
    const getAllSolution =  () => {
         InterviewService.getAll().on("value", onDataChange);

         return function cleanup() {
            InterviewService.getAll().off("value", onDataChange)
        }
    };

    


    return (
        <>
        <Container className='mb-5'>
            <Row className='justify-content-center'>
            <h2 className='text-center mt-3 mb-3 pd-2 text-primary'>List Interviews Solutions</h2>
            <hr />
                {loading && <Loader />}
                {solutions.length > 0 ? (solutions.map(s => (
                    <Col md={12} lg={12} sm={12} key={s.key}>
                        <SolutionAllCard  s={s} />
                    </Col>
                ))): (<h2> No data On Database ! please Add Some Data then come here...<b>Thank You</b> </h2>)}
               
            </Row>
        </Container>
            

        </>
    )
}
export default ListSolutions
