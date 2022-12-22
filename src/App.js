import './App.css';
import Main from "./component/Main"
import Register from './component/Register';
import Registered from './component/Registered';
import Pforget from './component/Pforget';
import Nav from './component/Nav';

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Logged from './component/Logged';
import Everification from './component/Everification';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/login' element={<Main/>}></Route>
          <Route path='/logged' element={<Logged/>}></Route>
          <Route path='/registered' element={<Registered/>}></Route>
          <Route path='/forget' element={<Pforget/>}></Route>
          <Route path='/everification' element={<Everification/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
