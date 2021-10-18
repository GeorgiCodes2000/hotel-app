import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Rooms from './Components/Rooms';
import Room from './Components/Room';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <Navbar/>
          <Route exact path="/"> 
            <Main/>
            <Services/>
          </Route>

          <Route path="/rooms">
            <Rooms/>
          </Route>

          <Route path='/room/:id'>
            <Room/>  
          </Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
