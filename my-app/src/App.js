import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import data from './data/data.json';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';


export const CoursesDataContext = React.createContext();

function App() {
  return (
    <>
    <CoursesDataContext.Provider value={data}>
      <NavBar />
      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/courses/:courseId" element={<CoursePage/>} />
      </Routes>
    </CoursesDataContext.Provider>
    </>
  );
}

export default App;
