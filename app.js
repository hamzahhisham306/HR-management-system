"use strict";
let allEmployes=[];
function Employee(EmployeeId, FullName, Department, Level, Image, Salary){
  this.EmployeeId=EmployeeId;
  this.FullName=FullName;
  this.Department=Department;
  this.Level=Level;
  this.Image=Image;
  this.Salary=Salary;
  allEmployes.push(this);  
}
console.log(allEmployes)

let main =document.getElementById('main');
let cards =document.querySelector('.cards');

let Employee1=new Employee(1000, "Ghazi Samer", "Adminstration", "Senior","./assets/Ghazi.jpg");
let Employee2=new Employee(1001, "Lana Ali", "Finance", "Senior","./assets/Lana.jpg" );
let Employee3=new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Tamara.jpg");
let Employee4=new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
let Employee5=new Employee(1004	, "Omar Zaid", "Development", "Senior","./assets/Omar.jpg");
let Employee6=new Employee(1005, "Rana Saleh", "Development", "Junior","./assets/Rana.jpg");
let Employee7=new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/Hadi.jpg");

Employee.prototype.generatSalary=function(min ,max){
    let diff = max-min;
    let randomSalary=Math.floor(Math.random()*diff)+min;
    let SalaryAfterTax=randomSalary-(randomSalary*7.5/100);
    this.Salary=SalaryAfterTax;
    return this.Salary;
}
Employee.prototype.renderEmployeeName=function(){
      let card=document.createElement('div');
      card.className='card';
      let image=document.createElement('img');
      image.src=this.Image;
      let h2=document.createElement('h2');
      h2.textContent=`Name:${this.FullName}-ID:${this.EmployeeId}`;
      let h3=document.createElement('h3');
      h3.textContent=`Deperatement:${this.Department} - Level: ${this.Level}`;
      let p=document.createElement('p');
      p.textContent=`Salary = ${this.Salary}`;

      card.appendChild(image);
      card.appendChild(h2)
      card.appendChild(h3);
      card.appendChild(p);
      cards.appendChild(card)
      
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
