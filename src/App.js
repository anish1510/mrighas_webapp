import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
