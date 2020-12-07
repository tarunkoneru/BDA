use companyDB
db
db.createCollection("Employee")
db.createCollection("Department")
db.Employee.insert({_id:1, Name:"ABC", Designation: "XYZ", Salary:20000, Age:30, Dept_num:1001})
db.Employee.update({_id:2, Name:"Avinash", Designation: "ABC", Age:35, Dept_num:1002},{$set:{Salary:30000}},{upsert:false})
db.Employee.update({_id:3, Name:"Aman", Designation: "PQR", Age:40, Dept_num:1003},{$set:{Salary:20000}},{upsert:true})
db.Employee.save({_id:4, Name:"dfsdf", Designation: "XYZ", Salary:20000, Age:40, Dept_num:1004})

db.Department.insert({id:"123" , name:"CSE" })
db.department.update({id:"234"} , {$set:{name:"ECE"}} , {upsert:true})
db.department.save({id:"34" , name:"CV"})

db.Employee.update({id:2} , {$set:{emp_age:"38"}})

db.Employee.remove({id:1},{$unset:{salary:"20000"}})

db.Employee.find().pretty()
db.Department.find().pretty()

db.Employee.find({Dept_num:{$in:['1001','1002','1003','1004']}}).pretty()

db.Employee.find({Name:/^A/}).pretty()

    