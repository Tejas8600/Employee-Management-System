import {React, useEffect } from "react";
import { useState } from "react";
import { deleteEmployee, listEmployees } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

export default function ListEmployeeComp(){
    const [employees, setEmployees]= useState (
        [{"id":1, "firstName":"ajay", "lastName":"patil","email":"aj@gmail.com" }]
    );

    useEffect(() =>{
        getAllEmployees();
    },[]);

    const getAllEmployees= () => 
    {
        listEmployees().then((response) =>{
            console.log(response.data);
            setEmployees(response.data);

        }).catch(error=>{
            console.log(error)
        });
    };
  
    const nav=useNavigate();
    const addNewEmployee= ()=>{
        nav('/add-employee');
    }

    const UpdateEmployee=(id)=>{
        nav(`/edit-employee/${id}`);
    }

    const RemoveEmployee =(id)=>{
        console.log(id);
        deleteEmployee(id).then(()=>{
            getAllEmployees();

        }).catch((error)=>{
            console.log(error);
        })
}

    return(
        <div className='container'>
            <h2>List Of All Employees</h2>
            <button className='btn btn-primary mb=2' onClick={addNewEmployee}>
                Add Employee
            </button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Emp id</th>
                        <th>Emp First Name</th>
                        <th>Emp Last Name</th>
                        <th>Emp Email id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp=>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>
                                <button className="btn btn-info" onClick={()=>UpdateEmployee(emp.id)}>Update</button>
                                <button className="btn btn-danger"onClick={()=>RemoveEmployee(emp.id)}>Delete</button>
                            </td>


                        </tr>
                    
                    )
                    }
                </tbody>
            </table>

        </div>
    )
}