import axios from "axios";
const REST_BASE_URI="http://localhost:8080/api/employees";

export const listEmployees=()=>{
    return axios.get(REST_BASE_URI);
}

export const CreateEmployee=(employee)=>{

    return axios.post(REST_BASE_URI,employee);
}

export const getAllEmployeeById=(empId)=>{
    return axios.get(REST_BASE_URI+'/'+empId);
}

export const UpdateEmployee=(empId,emp)=>{
    return axios.put(REST_BASE_URI+'/'+empId,emp);

}

export const deleteEmployee=(empId)=>{
    return axios.delete(REST_BASE_URI+'/'+empId);
}