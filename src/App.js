import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutoSlider from  './Components/AutoSlider';
import Slide1 from './Components/Slide1';
import Slide2 from './Components/Slide2';
import Slide3 from './Components/Slide3';
import Slide4 from './Components/Slide4';
import Slide5 from './Components/Slide5';
import Slide6 from './Components/Slide6';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AutoSlider />} />
          <Route path="/slide1" element={<Slide1 />} />
          <Route path="/slide2" element={<Slide2 />} />
          <Route path="/slide3" element={<Slide3 />} />
          <Route path="/slide4" element={<Slide4 />} />
          <Route path="/slide5" element={<Slide5 />} />
          <Route path="/slide6" element={<Slide6 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
