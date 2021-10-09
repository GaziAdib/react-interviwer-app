import React from 'react'
import AddInterview from './screens/AddInterview'
import ListInterviews from './screens/ListInterviews'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailInterview from './screens/DetailInterview'
import Header from './components/Header'
import SolutionDetail from './screens/SolutionDetail'
import UpdateInterview from './screens/UpdateInterview'
//footer
import Footer from './components/Footer';


const App = () => {
  return (

    <Router>
      <Header />
      <Route path='/' component={ListInterviews} exact/>
      <Route path='/create' component={AddInterview} exact/>
      <Route path='/detail' component={DetailInterview} exact/>
      <Route path='/list/:key/detail' component={SolutionDetail} exact />
      <Route path='/list/:key/update' component={UpdateInterview} exact />
      <Footer />
    </Router>



  )
}

export default App
