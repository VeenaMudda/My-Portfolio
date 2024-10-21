import './App.css';
import { BrowserRouter as Router, Route, Routes,useRoutes } from 'react-router-dom';
import HomePage from './HomePage';
import BeautyClub from './BeautyClub';
import Community from './Community';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beauty" element={<BeautyClub />} />
        <Route path="/community" element={<Community/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;