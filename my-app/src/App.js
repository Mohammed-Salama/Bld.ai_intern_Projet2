import React , {useEffect , useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
//import data from './data/data.json';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import ScrollToTop from './components/ScrollToTop';
import { ColorRing } from 'react-loader-spinner'
export const CoursesDataContext = React.createContext();

function App(){
  const [appState , setAppState] = useState(
    {
      data: "",
      isLoading: false,
      error: "",
    }
  );
  useEffect(()=>{
      setAppState({...appState, isLoading: true});
      fetch("http://localhost:3000/data/data.json")
        .then((response) => response.json())
        .then((json) => {
          setAppState({ data: json, isLoading: false, error: "" });
        })
        .catch((error) => {
          setAppState({ ...appState, isLoading: false, error: "Cannot fetch the data" });
        });
         // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderScreen = () => {
    if (appState.isLoading) {
      return <div className='loading_spinner_box'><ColorRing  visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/></div>;
    } else if (appState.error) {
      return <div className="error">{appState.error}</div>;
    } else if(appState.data) {
      return (
        <CoursesDataContext.Provider value={appState.data}>
        <NavBar />
        <ScrollToTop>
        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/courses/:courseId" element={<CoursePage/>} />
        </Routes>
        </ScrollToTop>
      </CoursesDataContext.Provider>
      );
    }
  };
  return (
    <>
    {renderScreen()}
    </>
  );
}

export default App;
