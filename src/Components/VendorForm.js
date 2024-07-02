import { useState } from "react";
import  axios from "axios";
export const VendorForm=()=>
    {
        const [name, SetName] = useState('');
        const [upi, setUpi] = useState('');
        const [email, setEmail] = useState('');
        const handleSubmit=async()=>
            {
                console.log("submit")
                const response=await axios.post('http://localhost:8082/vendor/addVendor',{email,name,upi})
                console.log(response.data);
                const response1 = await axios.get("http://localhost:8082/emp/getAllEmp");
          
                console.log(response1.data)
                
            }
        return(
            <>
            <h2 className="fw-bolder center">Add Vendor</h2>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e=>SetName(e.target.value)} />
                </div>
   
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="upi" className="form-label">UPI</label>
                    <input type="text" className="form-control" id="upi" placeholder="Designation"value={upi} onChange={e=>setUpi(e.target.value)} />
                </div>
                <button type="text" className="btn btn-primary" onClick={handleSubmit}>Add Vendor</button>
            </>
    
        )
    }