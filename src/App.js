//import Switch from 'react-bootstrap/esm/Switch'
import { Switch } from 'react-router'
import Particles from 'react-particles-js'
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './screens/Home'
import Projects from './screens/Projects'
import About from './screens/About'
import Resume from './screens/Resume'

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Particles
          params={{
            polygon: {
              enable: true,
              type: 'inside',
              move: {
                radius: 100,
              },
              url: 'path/to/svg.svg',
            },
            backgroundMode: {
              enable: true,
              zIndex: 0,
            },
          }}
        />
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
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/About' exact component={About}></Route>
            <Route path='/Resume' exact component={Resume}></Route>
            <Route path='/Projects' component={Projects}></Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
