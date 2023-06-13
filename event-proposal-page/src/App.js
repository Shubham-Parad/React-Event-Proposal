import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import UserHome from '../src/components/User/UserHome';
import Userhome from '../src/components/User/Userhome';
import Userreg from "./components/User/Userreg";
import Userprop from "./components/User/UserProposals/Userprop";
import Proposaldetail from "./components/User/UserProposals/Proposaldetail";
import Vendorhome from './components/Vendor/Vendorhome';
import AppContext from "./components/User/UserProposals/Context"
import Vendorreg from './components/Vendor/Vendorreg';
import VendorProp from "./components/Vendor/VendorProp/VendorProp"
import Vencreateprop from "./components/Vendor/VendorCeateProp/Vencreateprop";



function App() {
  return (
    <>
      <BrowserRouter>    
      <AppContext>
        <Routes>      
        <Route path="/" element={<Vendorhome />} />

          <Route path="/User" element={<Userhome/>}/>   
          <Route path="/createuseraccount" element={<Userreg/>}/>      
          <Route path='/Userproposals' element={<Userprop/>}/>
          <Route path="/Proposaldetail/:id" element={<Proposaldetail/>}/>
          <Route path="/createvendoraccount" element={<Vendorreg/>}/>
          <Route path="/VendorProposal" element={<VendorProp/>}/>
          <Route path='/createproposal' element={<Vencreateprop/>}/>


        </Routes>
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
/**
 * <div className="App">
      
    </div>
 */