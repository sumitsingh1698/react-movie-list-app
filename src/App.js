import './App.css';
import Form from './components/Form.js';
import Login from './components/Login.js';
import MovieList from './components/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact path='/' element={<Form />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/home' element={< MovieList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
