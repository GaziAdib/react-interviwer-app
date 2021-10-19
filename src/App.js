import React from 'react'
import AddInterview from './screens/AddInterview'
import ListInterviews from './screens/ListInterviews'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SolutionDetail from './screens/SolutionDetail'
import UpdateInterview from './screens/UpdateInterview'
//footer
import Footer from './components/Footer';
import AboutMe from './screens/AboutMe'
import Error404Page from './components/Error404Page'
import ListSolutions from './screens/ListSolutions'


const App = () => {



  return (

    <Router>
      <Header />
        <Switch>
          <Route path = '/' component={ListInterviews} exact/>
          <Route path = '/about' component={AboutMe} exact/>
          <Route path = '/create' component={AddInterview} exact/>
          <Route path = '/solutions' component={ListSolutions} exact/>
          <Route path = '/list/:key/detail' component={SolutionDetail} exact />
          <Route path = '/list/:key/update' component={UpdateInterview} exact />
          <Route component={Error404Page} exact />
        </Switch>
      <Footer />
    </Router>



  )
}

export default App
