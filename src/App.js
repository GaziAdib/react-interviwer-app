import React from 'react'
import AddInterview from './components/AddInterview'
import ListInterviews from './components/ListInterviews'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailInterview from './components/DetailInterview'
import Header from './components/Header'
import SolutionDetail from './components/SolutionDetail'


const App = () => {
  return (

    <Router>
      <Header />
      <Route path='/create' component={AddInterview} exact/>
      <Route path='/list' component={ListInterviews} exact/>
      <Route path='/detail' component={DetailInterview} exact/>
      <Route path='/list/:key/detail' component={SolutionDetail} exact />
    </Router>

  )
}

export default App
