import './Style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "../Home"
import About from "../About"
import Portfolio from "../Portfolio"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
      </Routes>
    </Router>
  );
}

export default App;