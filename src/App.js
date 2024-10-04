import './App.css';
import { BrowserRouter as Router, Route, Routes,useRoutes } from 'react-router-dom';
import HomePage from './HomePage';
import BeautyClub from './BeautyClub';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beauty" element={<BeautyClub />} />
      </Routes>
    </Router>
  );
}

export default App;