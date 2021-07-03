/* eslint-disable no-unused-vars */
import './App.css';
// install react-router-dom
import {BrowserRouter as Router} from 'react-router-dom';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
    <Home />
    </Router>
  );
}

export default App;
