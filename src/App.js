import './App.css';
import {BrowserRouter as Router, Switch,Route,NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Blog from '../src/Blog'
import Details from '../src/Details'

function App() {
  return (
    <>
    <h1 className='text-center text-info mt-3'>router</h1>

    <Router>
      <NavLink to='/Blog' className='mx-1 p-2 shadow rounded' style={{color:'#333',border:'1px solid #111',textDecoration:'none'}}>blog</NavLink>
     <Route path='/Blog' component={Blog}/>

        <Route path='/Details/:id' component={Details} />

    </Router>
    </>
  )

}

export default App;
/*

this:
       
    <Route path='/Details/:id' component={Details} />

or this:    
    <Route path='/Details/:id' render={props=>(
       <Details {...props}/>
     )}>
     </Route>

*/
