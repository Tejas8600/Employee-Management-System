import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { HeaderComp } from './Components/HeaderComp';
import { FootComp } from './Components/FooterComp';
import ListEmployeeComp from './Components/ListEmployeeComp';
import CreateEmployeeComp from './Components/CreateComp';
import UpdateEmployeeComp from './Components/UpdateComp';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="App">

<BrowserRouter>
    <HeaderComp></HeaderComp>
         <Routes>
            <Route path='/' element={<ListEmployeeComp></ListEmployeeComp>}></Route>
            <Route path='/employees' element={<ListEmployeeComp></ListEmployeeComp>}></Route>
            <Route path='/add-employee' element={<CreateEmployeeComp></CreateEmployeeComp>}></Route>
            <Route path='/edit-employee/:id' element={<UpdateEmployeeComp></UpdateEmployeeComp>}></Route>
          </Routes>
      <FootComp></FootComp>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
