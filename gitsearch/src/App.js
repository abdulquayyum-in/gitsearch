import User from './components/User';
import './App.css';
import Search from './components/Search';
import Profile from './components/Profile';
import {Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Search/>} />
      <Route path='/user' element={ <Profile/> }/>
    </Routes>
   
     {/* <Profile/> */}
     </>
     

  );
}

export default App;
