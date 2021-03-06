import React, {useState, useEffect} from 'react'
import firebase from '@firebase/app-compat';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import HtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { jsPDF } from 'jspdf';
import { useParams, useHistory } from 'react-router-dom'
import FadeIn from 'react-fade-in';





const SolutionDetail = () => {

    //{ match, history }
    // by which key the detail will be shown
    //const key = match.params.key;

    // new way params

    const { key } = useParams()

    const history = useHistory()

    // console.log(history.location.key, history.location.pathname, history.location.search)

    // states to show values in JSX an set database data
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionSolution, setQuestionSolution] = useState('');
    const [questionType, setQuestionType] = useState('');
    const [questionLanguage, setQuestionLanguage] = useState('');
    const [loading,setLoading] = useState(true);


    useEffect(() => {
            
         getDetailSolutionData(key)
        
    }, [key])


    const getDetailSolutionData = (key) => {
        if (key != null) {
            firebase.database().ref('/interviews').child(key).on('value', snapshot => {
                
                if(snapshot.exists()) {

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
                }

            
             })

        } else {
            setQuestionTitle('')
            setQuestionSolution('')
            setQuestionType('')
            setQuestionLanguage('')
            setLoading(false)
        }     
    }



    // delete Handler
    const deleteHander =   () => {
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



    
    // pdf convert
    const pdfHandler = () => {

        const doc = new jsPDF()

        const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        //const pageHeight = doc.internal.pageSize.height
        
        var eachLiTag = ''
        var pOnly =''
        var tagList = []
        var tagtext = ''

        //const listEl = document.querySelectorAll('ul').forEach(item => item)
        const ptag = document.querySelector('.solution-detail-text')
        const ultag = ptag.querySelector('ul')
        

        if(ultag) {
            const liTag = ultag.querySelectorAll('li')
            for (var i=0; i < liTag.length; i++) {
                eachLiTag = liTag[i].innerText
                tagList.push(eachLiTag)
            }
            tagtext = tagList.toString()
        } else {
            pOnly = ptag.innerText
        }

       // console.log(ptag, ultag, liTag)
        doc.setFontSize(12);
        doc.text(`${questionTitle}\n ${tagtext} \n${pOnly} \n\n type: ${questionType} \n\n lagunage: ${questionLanguage}`, pageWidth / 2, 75, 'center');
        doc.save(`${questionTitle}.pdf`);
        pOnly = ptag.innerText
        //console.log(pOnly)

    }



    return (
        <>
        {loading ? <Loader /> : (
            <>
            <FadeIn delay={2}>
                    <Container className='justify-content-center'>
                    <Row className="justify-content-center">
                        <Col md={10} sm={12} lg={12} xs={11}>
        
                        <Card className='question-solution-detail-card shadow mt-4 mb-2 p-2 rounded'>
                            <Card.Body>
                                    <Card.Title>Question: {questionTitle}</Card.Title>
                                    <hr />
                                    <p className='solution-detail-text'>Solution: <br /> <pre className='pre-text'>{ HtmlParser(questionSolution) }</pre> </p>
                                    <br />
                                    <span className={questionType === 'intermediate' ? "solution-question-type-intermediate" : "solution-question-type"}>{questionType}</span>
                                    <span className="solution-question-language">{questionLanguage}</span>
                            </Card.Body>
                        </Card>
                
                        </Col>
                    </Row>

                
                </Container>


                <Container className="mb-5 text-center">
                <hr />
                    <Row className='m-2'>
                        <div className="m-2">

                    
                        <Link to={`/list/${key}/update`}>
                            <Button variant="block-outline bg-dark text-light" className='mt-2 ml-2 mr-2 p-2 mb-1'>Update</Button>
                        </Link>
                        

                        <Button  className='mt-2 ml-2 mr-2 p-2 mb-1' variant="block-outline text-light bg-danger" onClick={deleteHander}>Delete</Button>
                        
                        <Button className='mt-2 ml-2 mr-2 pb-2 mb-1' variant="block-outline text-light bg-success" onClick={pdfHandler}>CovertPDF</Button>
                                    

                        </div>
                        
                    
                    </Row>

                </Container>
            </FadeIn>
            
            
            </>
        )}
        
        </>
    )
}

export default SolutionDetail
