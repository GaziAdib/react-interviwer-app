import React from 'react'
import AddInterview from './components/AddInterview'
import ListInterviews from './components/ListInterviews'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailInterview from './components/DetailInterview'
import Header from './components/Header'
import SolutionDetail from './components/SolutionDetail'
import UpdateInterview from './components/UpdateInterview'


const App = () => {
  return (

    <Router>
      <Header />
      <Route path='/' component={ListInterviews} exact/>
      <Route path='/create' component={AddInterview} exact/>
      <Route path='/detail' component={DetailInterview} exact/>
      <Route path='/list/:key/detail' component={SolutionDetail} exact />
      <Route path='/list/:key/update' component={UpdateInterview} exact />
    </Router>

  )
}

export default App
