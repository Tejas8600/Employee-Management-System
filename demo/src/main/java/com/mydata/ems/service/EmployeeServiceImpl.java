package com.mydata.ems.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mydata.ems.dto.EmployeeDto;
import com.mydata.ems.entity.Employee;
import com.mydata.ems.exception.ResourceNotFoundException;
import com.mydata.ems.mapper.EmployeeMapper;
import com.mydata.ems.repository.EmployeeRepository;

 
@Service
public class EmployeeServiceImpl implements EmployeeService
{
	private EmployeeRepository employeeRepository;
	//constructor DI;
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) 
	{
		super();
		this.employeeRepository=employeeRepository;
	}

	
	public EmployeeDto createEmployee (EmployeeDto employeeDto)
	{
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);//unwrap
	    
		Employee savedEmployee=employeeRepository.save(employee);//save

		EmployeeDto edto=EmployeeMapper.mapToEmployeeDto(savedEmployee);//wrap
		return edto;//send
		
		

	
	}


	@Override
	public List<EmployeeDto> getAllEmployee() 
	{
		List<Employee> allEmp=employeeRepository.findAll();
		
		//List<EmployeeDto>upEmp=newArrayList();
		//allEmp---iterate---employee--convert/map---employeeDto---addd upemp
		
		return allEmp.stream().map((Employess)->EmployeeMapper.mapToEmployeeDto(Employess)).collect(Collectors.toList());
		
		//Stream<Employee> ee=allEmp.Stream();
		//Stream<EmployeeDto>edto=ee.map((Employess)->EMployeeMapper.maptoemployeeDto(Employess)
		//List<EmployeeDto>upEmp=edto.collect(Collectors.toList());
		
		
		
	}


	@Override
	public EmployeeDto getEmployeeById (Long empId) throws ResourceNotFoundException {
		Employee emp= employeeRepository.findById(empId).orElseThrow(() ->new ResourceNotFoundException("employee is not exist with given id:"+empId));
		return EmployeeMapper.mapToEmployeeDto(emp);
		
		
	}


	@Override
	public void deleteEmployee(Long id) throws ResourceNotFoundException {
		Employee e = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("employee is not exist with given id :"+id));
		employeeRepository.deleteById(id);		
	}


	@Override
	public EmployeeDto updateEmployee(Long id, EmployeeDto ed) throws ResourceNotFoundException {
		Employee e= employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException ("employee is not exist with given id:"));
		
		e.setFirstName(ed.getLastName());
		e.setLastName(ed.getLastName());
		e.setEmail(ed.getEmail());
		
		Employee updateEmp=employeeRepository.save(e);
		
		return EmployeeMapper.mapToEmployeeDto(updateEmp);
	}



	
	
}