import './App.css';
import { useLocation } from 'react-router-dom';
import {Route} from 'react-router-dom'
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Form from './views/form/Form'
import Detail from './views/detail/Detail'
import {NavBar} from './components'


function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/form' component={Form}/>
      <Route path='/Detail' component={Detail}/>
    </div>
  );
}

export default App;
