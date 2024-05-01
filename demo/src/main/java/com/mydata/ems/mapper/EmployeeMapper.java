package com.mydata.ems.mapper;

import com.mydata.ems.dto.EmployeeDto;
import com.mydata.ems.entity.Employee;
//Mapper is created to convert Employee entity to employeeDto.
//EmployeeDto to Employee entity.

public class EmployeeMapper {
	public static EmployeeDto mapToEmployeeDto(Employee e)
	{
		EmployeeDto ed =new EmployeeDto(e.getId(),e.getFirstName(),e.getLastName(),e.getEmail());
		return ed;
	}
	public static Employee mapToEmployee(EmployeeDto eDto) {
		return new Employee(eDto.getId(),eDto.getFirstName(),eDto.getLastName(),eDto.getEmail());
	}

}
