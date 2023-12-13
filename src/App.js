import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Connexion from './components/Connexion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Test from './components/Test';

function App() {
  return (
    <div className="App">

      {<Nav/>}

        <Router>
          <Routes>
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/" element={<Home />} />
            <Route path="/adam" element={<Test />} />
          </Routes>
        </Router>

        {<Footer/>}
          
    </div>
  );
}

export default App;
