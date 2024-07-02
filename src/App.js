import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { VendorForm } from './Components/VendorForm';
import { EmployeeForm } from './Components/EmployeeForm';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route  path="/" element={<Home/>} />
          <Route path="/vendor" element={<VendorForm/>} />
          <Route path="/employee" element={<EmployeeForm/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
