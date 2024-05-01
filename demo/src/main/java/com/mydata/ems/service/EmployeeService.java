package com.mydata.ems.service;

import java.util.List;

import com.mydata.ems.dto.EmployeeDto;
import com.mydata.ems.exception.ResourceNotFoundException;

public interface EmployeeService 
{
	public EmployeeDto createEmployee(EmployeeDto employeeDto);
	public List<EmployeeDto> getAllEmployee();
	
	public EmployeeDto getEmployeeById(Long empId) throws ResourceNotFoundException;
	
	public void deleteEmployee(Long id) throws ResourceNotFoundException;
	
	public EmployeeDto updateEmployee(Long id, EmployeeDto ed) throws ResourceNotFoundException;
}
