"use strict";

function Employee(EmployeeId, FullName, Department, Level, Image, Salary){
  this.EmployeeId=EmployeeId;
  this.FullName=FullName;
  this.Department=Department;
  this.Level=Level;
  this.Image=Image;
  this.Salary=Salary;  
}
let main =document.getElementById('main');
let Employee1=new Employee(1000, "Ghazi Samer", "Adminstration", "Senior","./images/gazie.jpg");
let Employee2=new Employee(1001, "Lana Ali", "Finance", "Senior","./images/lana.jfif" );
let Employee3=new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./images/tamara.jfif");
let Employee4=new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./images/safi.jfif");
let Employee5=new Employee(1004	, "Omar Zaid", "Development", "Senior","./images/omar.jfif");
let Employee6=new Employee(1005, "Rana Saleh", "Development", "Junior","./images/rana.jfif");
let Employee7=new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./images/hadi.jfif");

Employee.prototype.generatSalary=function(min ,max){
    let diff = max-min;
    let randomSalary=Math.floor(Math.random()*diff)+min;
    let SalaryAfterTax=randomSalary-(randomSalary*7.5/100);
    this.Salary=SalaryAfterTax;
    return this.Salary;
}
Employee.prototype.renderEmployeeName=function(){
   
      let p=document.createElement('p');
      p.innerHTML="The full name: "+this.FullName+"<br>"+"The salary after tax : "+this.Salary+"<br><br>";
      main.appendChild(p);
    
}
console.log(Employee1)

Employee1.generatSalary(1500, 2000)
Employee2.generatSalary(1500, 2000);
Employee3.generatSalary(1500, 2000);
Employee4.generatSalary(1000, 1500);
Employee5.generatSalary(1500, 2000);
Employee6.generatSalary(500, 1000);
Employee7.generatSalary(1000, 1500);
Employee1.renderEmployeeName();
Employee2.renderEmployeeName();
Employee3.renderEmployeeName();
Employee4.renderEmployeeName();
Employee5.renderEmployeeName();
Employee6.renderEmployeeName();
Employee7.renderEmployeeName();


