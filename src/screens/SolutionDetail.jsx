import React, {useState, useEffect} from 'react'
import firebase from '@firebase/app-compat';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import HtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { jsPDF, jsPDFOptions } from 'jspdf';
import ReactDOMServer from 'react-dom/server';
//import { htmlToText } from 'html-to-text';




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



    
    // pdf convert
    const pdfHandler = () => {

        const doc = new jsPDF()

        const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.height
        
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
        console.log(pOnly)

    }



    return (
        <>
        {loading ? <Loader /> : (
            <>
            <Container>
            <Row className="justify-content-left">
                <Col md={8} sm={10} lg={10} xs={10}>

                    
               

                <Card className='question-solution-detail-card shadow-sm m-4 p-4 rounded'>
                    <Card.Body>
                            <Card.Title>Question: {questionTitle}</Card.Title>
                            <hr />
                            <p className='solution-detail-text'>Solution: <br /> { HtmlParser(questionSolution) }</p>
                            <br />
                            <span className={questionType === 'intermediate' ? "solution-question-type-intermediate" : "solution-question-type"}>{questionType}</span>
                            <span className="solution-question-language">{questionLanguage}</span>
                    </Card.Body>
                </Card>

                   
                    
                    
                    

                </Col>

                <Col md={4} lg={2} sm={2} xs={2}>
                <Row className='justify-content-center mt-5 mr-5'>
              
              <span>
              <Link to={`/list/${key}/update`}>
                    <Button variant="block-outline bg-dark text-light" className='mt-2 ml-2 mr-2 p-2 mb-1'>Update</Button>
                    </Link>
              </span>
             
                   
               <span>
               <Button  className='mt-2 ml-2 mr-2 p-2 mb-1' variant="block-outline text-light bg-danger" onClick={deleteHander}>Delete</Button>
               </span>

                     
               <span>
               <Button  className='mt-2 ml-2 mr-2 pb-2 mb-1' variant="block-outline text-light bg-success" onClick={pdfHandler}>CovertPDF</Button>
               </span>
               
              
            
                
        
            </Row>
                </Col>

            </Row>

          

        </Container>
            
            </>
        )}
        
        </>
    )
}

export default SolutionDetail
