import logo from './logo.svg';
import './App.css';
import Vencreateprop from "../src/components/Vendor/VendorCeateProp/Vencreateprop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vendorreg from "../src/components/Vendor/Vendorreg";
import Userreg from "./components/User/Userreg";
import Navbar from "./components/Vendor/VendorProp/Navbar";
import VendorProp from "../src/components/Vendor/VendorProp/VendorProp";
import Userhome from "../src/components/User/Userhome"
import Vendorhome from "../src/components/Vendor/Vendorhome"
import Userprop from "./components/User/UserProposals/Userprop";
import Proposaldetail from "./components/User/UserProposals/Proposaldetail";
import AppContext from "./components/User/UserProposals/Context"
function App() {
  return (
    <BrowserRouter>
    <AppContext>
      <Routes>
      
          <Route path="/createvendoraccount" element={<Vendorreg/>}/>
          <Route path="/VendorProposal" element={<VendorProp/>}/>
          <Route path='/createproposal' element={<Vencreateprop/>}/>
          <Route path="/" element={<Vendorhome />} />
          <Route path="/User" element={<Userhome/>}/>
          <Route path="/createuseraccount" element={<Userreg/>}/>
          <Route path='/Userproposals' element={<Userprop/>}/>
          <Route path="/Proposaldetail/:id" element={<Proposaldetail/>}/>
         
          
          
      </Routes>
      </AppContext>
    
    </BrowserRouter>
  );
}

export default App;
