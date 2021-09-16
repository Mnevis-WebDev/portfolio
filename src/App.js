import Particles from 'react-particles-js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './screens/Home'
import Projects from './screens/Projects'

function App() {
  return (
    <Router>
      <div className='App'>
        <Particles className='particles' />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Header />

          <Route path='/' exact component={Home}></Route>
          <Route path='/Projects' component={Projects}></Route>
        </div>
      </div>
    </Router>
  )
}

export default App
