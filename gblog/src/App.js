
import Navbar from './navbar';
import Home from './home';
import Create from './createBlog';
import Error from './error';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import BlogDetail from './blogdetails';
function App() {
    
  return (
    <Router>
      <div className="App">
          <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/Create'>
              <Create/>
            </Route>
            <Route path='/blog/:id'>
              <BlogDetail/>
            </Route>
              <Route path='*'>
                <Error/>
            </Route>
          </  Switch>

           
         
        </div>
      </div>
    </Router>
 
  );
}

export default App;
