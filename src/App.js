import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Assessment from "./components/Assessment";
import TestPage from './components/Testpage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
           
      <Route path ='/' element = {<Home/>}/>
      <Route path ='/login' element = {<Login/>}/>
      <Route path ='/register' element = {<Register/>}/>
      <Route path ='/assessment' element = {<Assessment/>}/>
      <Route path ='/testpage' element = {<TestPage/>}/>

         
          


      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

