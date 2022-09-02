import './App.css';
import NavBar from './components/NavBar';
import data from './data/data.json';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
function App() {
  return (
    <>
    <NavBar />
    <Routes> 
      <Route path="/" element={<HomePage data={data} />} />
      <Route path="/courses/:courseId" element={<CoursePage/>} />
    </Routes>
    </>
  );
}

export default App;
