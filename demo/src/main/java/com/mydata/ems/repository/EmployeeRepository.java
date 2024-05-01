package com.mydata.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mydata.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository <Employee, Long>{
	

}
