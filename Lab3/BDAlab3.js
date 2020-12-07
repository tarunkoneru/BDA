use StudentDB
db.createCollection("Student")

db.Student.insert({_id:1, Name:"XYZ", Rollno:1, Age:15, Contact_no: 9899767810, Email:"xyz@gmail.com"})
db.Student.insert({_id:10, Name:"PQR", Rollno:10, Age:16, Contact_no: 9875648742, Email:"pqr@gmail.com"})
db.Student.insert({_id:11, Name:"ABC", Rollno:11, Age:17, Contact_no: 9276496537, Email:"abc@gmail.com"})
db.Student.insert({_id:12, Name:"LMN", Rollno:12, Age:18, Contact_no: 9193564787, Email:"lmn@gmail.com"})

db.Student.find()

db.Student.update({Rollno:10},{$set:{Email:"pqr12@gmail.com"}})

db.Student.update({Rollno:11},{$set:{Name:"FEM"}})
db.Student.drop()

db.createCollection("Customers")

db.Customers.insert({_id:1, Cust_id:001, Acc_Bal:12000, Acc_Type:"X"})
db.Customers.insert({_id:2, Cust_id:001, Acc_Bal:10000, Acc_Type:"Z"})
db.Customers.insert({_id:3, Cust_id:002, Acc_Bal:12000, Acc_Type:"Y"})
db.Customers.insert({_id:4, Cust_id:002, Acc_Bal:21000, Acc_Type:"Z"})
db.Customers.insert({_id:5, Cust_id:002, Acc_Bal:20000, Acc_Type:"X"})
db.Customers.insert({_id:6, Cust_id:003, Acc_Bal:12000, Acc_Type:"X"})
db.Customers.insert({_id:7, Cust_id:001, Acc_Bal:11000, Acc_Type:"Z"})

db.Customers.find()

db.Customers.aggregate([{$match:{Acc_Type:"Z"}},{$group:{_id:"$Cust_id", TotalAccBal:{$sum:"Acc_Bal"}}},{$match:{TotalAccBal:{$gt:1200}}}])
db.Customers.aggregate([{$group:{_id:"$Cust_id", MaxTotBal:{$max:"$Acc_Bal"},MinTotBal:{$min:"$Acc_Bal"}}}])
db.Customers.drop()
