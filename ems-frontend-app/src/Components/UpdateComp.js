import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllEmployeeById, UpdateEmployee} from '../Services/EmployeeService';
export default function UpdateEmployeeComp() {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');

    const {id}=useParams();
    useEffect(()=>{
        if(id){
            getAllEmployeeById(id).then((response)=>{
                const e=response.data;
                console.log(e);
                setFirstName(e.firstName);
                setLastName(e.lastName);
                setEmail(e.email);

            }).catch((error)=>{
                console.log(error);
            })
        }
    },[id])

    const nav=useNavigate();
    const editEmployee=(event)=>{
        event.preventDefault();

        const employee={firstName,lastName,email};
        console.log(employee);

        UpdateEmployee(id,employee).then((response)=>{
            console.log(response.data);
            nav('/employees');
        })
    }


  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Update Employee</h2>
                <div class="card-body">
                    <form>
                        <div className='form-group mb2' >
                            <label className='form-label'>First Name</label>
                            <input type='text' placeholder='Enter the first name' name='firstName' value={firstName}
                                className='form-control' onChange={(event)=>{setFirstName(event.target.value)}}></input>
                         </div>

                        <div className='form-group mb2' >
                            <label className='form-label'>Last Name</label>
                            <input type='text' placeholder='Enter the last name' name='lastName' value={lastName}
                                className='form-control' onChange={(event)=>{setLastName(event.target.value)}}></input>
                        </div>

                        <div className='form-group mb2' >
                            <label className='form-label'>Email Id</label>
                            <input type='text' placeholder='Enter the email id' name='email' value={email}
                                className='form-control' onChange={(event)=>{setEmail(event.target.value)}}></input>
                        </div>

                        <button className='btn btn-success' onClick={editEmployee}> Update Employee</button> 

                    </form>
                </div>

            </div>

        </div>
       
    </div>
  )
}

