import Index from './pages/Index';
import About from './pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/ab' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
