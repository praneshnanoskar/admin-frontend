import axios from "axios";
import { useState } from "react"

export const EmployeeForm = () => {
    const [name, SetName] = useState('');
    const [designation, setDesignation] = useState('')
    const [ctc, setCtc] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit=async()=>
        {
            console.log("submit")
            const response=await axios.post('http://localhost:8082/emp/addEmp',{name,designation,email,ctc})
            console.log(response.data);
            
        }
    return (
        <>
        <h2 className="fw-bolder center">Add Employee</h2>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e=>SetName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="desi" className="form-label">Designation</label>
                <input type="text" className="form-control" id="desi" placeholder="Designation"value={designation} onChange={e=>setDesignation(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="ctc" className="form-label">CTC</label>
                <input type="number" className="form-control" id="ctc" placeholder="Enter CTC" value={ctc} onChange={e=>setCtc(e.target.value)} />
            </div>
            <button type="text" className="btn btn-primary" onClick={handleSubmit}>Add Employee</button>
        </>

    )

}