import axios from "axios";
import { useEffect, useState } from "react"

export const GetData = () => {
    const [emp, setEmp] = useState([]);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios.get("http://localhost:8082/emp/getAllEmp");

            setEmp(response.data)
        }
        const fetchVendors = async () => {
            const response = await axios.get("http://localhost:8082/vendor/getAllVendor");
            setVendors(response.data)
        }
        fetchEmployees();
        fetchVendors();

    }, [])
    useEffect(() => {
        console.log("ven", vendors)
    }, [vendors])
    return (
        <>
            <h2>Employee Data</h2>

            <table class="table ">
                <thead className="thead-danger">
                    <tr className="thead-danger">
                        <th scope="col">EmpId</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">CTC</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map(em =>
                        (<tr>
                            <th scope="row">{em.empId}</th>
                            <td>{em.email}</td>
                            <td>{em.name}</td>
                            <td>{em.designation}</td>
                            <td>{em.ctc}</td>

                        </tr>)
                        )
                    }


                </tbody>
            </table>

            <h2>Vendor Data</h2>

            <table class="table ">
                <thead className="thead-danger">
                    <tr className="thead-danger">
                        <th scope="col">VendorId</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">UPI</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        vendors.map(v =>
                        (<tr>
                            <th scope="row">{v.vendorId}</th>
                            <td>{v.email}</td>
                            <td>{v.name}</td>
                            <td>{v.upi}</td>

                        </tr>)
                        )
                    }


                </tbody>
            </table>
        </>
    )

}