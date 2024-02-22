import {Routes, Route } from 'react-router-dom';
import Events from './Components/Events'
import './App.css'
import NotFound from './Components/NotFound';
import MyNavBar from './Components/MyNavBar';


function App() {


  return (
    <>
    <MyNavBar/>
    <Routes>
        <Route  path="/*" element={<NotFound />} />
        <Route exact path="/" element={<Events />} />
        
      </Routes>
    </>
  )
}

export default App