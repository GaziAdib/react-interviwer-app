import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InterviewService from '../services/InterviewService'
import SolutionAllCard from '../components/SolutionAllCard'
import Loader from '../components/Loader'


const DetailInterview = () => {

    const [solutions, setSolutions] = useState([])
    const [loading,setLoading] = useState(true);
    // const [light, setLight] = useState(false);
    // const [dark, setDark] = useState(false);
    // const [textColor, setTextColor] = useState('');
    // const [bgColor, setBgColor] = useState('');

    

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

  

    useEffect(() => {
        const getAllSolution = () => {
            InterviewService.getAll().on("value", onDataChange);

            return () => {
                InterviewService.getAll().off("value", onDataChange)
            }
        };

        getAllSolution()
    },[])

    // const setToDarkMode = () => {
    //     setDark(true)
    //     setLight(false)
    //     if(dark === true) {
    //         setBgColor('bg-dark')
    //         setTextColor('text-light')
    //     }
    // }

    // const setToLightMode = () => {
    //     setDark(false)
    //     setLight(true)
    //     if(light === true)
    //         setBgColor('bg-light')
    //         setTextColor('text-dark')
    // }

    //className={light ? textColor && bgColor : 'bg-dark text-light'}

   

   


    return (
        <>
        <Container className='mb-5'>
            {/* <Button onClick={setToLightMode}>Light</Button>
            <Button onClick={setToDarkMode}>Dark</Button> */}
            {/* <h2 className={light ? textColor && bgColor : 'bg-dark text-light'}>text dark and light</h2> */}
            <Row className='justify-content-center'>
            <h2 className='text-center mt-3 mb-3 pd-2 text-primary'>List Interviews Solutions</h2>
            <hr />
                {loading && <Loader />}
                {solutions.map(s => (
                    <Col md={12} lg={12} sm={12} key={s.key}>
                        <SolutionAllCard  s={s} />
                    </Col>
                ))}
            </Row>
        </Container>
            

        </>
    )
}
export default DetailInterview
