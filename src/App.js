import './App.css';
import Home from './home';
import Login from './Login';
import Createac from './createac';
import Dashboard from './dashboard'; 
import About from './about';
import Contact from './contact';
import Policy from './policy';
import Policycomp from './policycomp';
import Postdetails from './postdetails';
import Accman from './accman';
import Claim from './claim';
import Payment from './payment';
import Profile from './profile';
import Renewal from './renewal';
import Bill from './bill';
import Claim1 from './claim1';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/createac"element={<Createac/>}/>
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/policy"element={<Policy/>}/>
        <Route path="/policycomp"element={<Policycomp/>}/>
        <Route path="/accman"element={<Accman/>}/>
        <Route path="/claim"element={<Claim/>}/>
        <Route path="/payment"element={<Payment/>}/>
        <Route path="/profile"element={<Profile/>}/>
        <Route path="/renewal"element={<Renewal/>}/>
        <Route path="/bill"element={<Bill/>}/>
        <Route path="/claim1"element={<Claim1/>}/>
        <Route path="/postdetails"element={<Postdetails/>}/>
      </Routes>
    </Router>
  );
}
export default App;