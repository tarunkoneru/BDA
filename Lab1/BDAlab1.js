show dbs
use myDB
show dbs
db
db.createCollection("Student")
db.Student.insert({_id:1, Name: "ABC", Department: "CSE", Sem:7, USN:"1BM15CS136", Year:"4", Batch:"2020-2021"});
db.Student.insert({_id:2, Name: "LMN", Department: "CSE", Sem:7, USN:"1BM17CS001", Year:"4", Batch:"2020-2021"});
db.Student.insert({_id:3, Name: "XYZ", Department: "CSE", Sem:7, USN:"1BM17CS002", Year:"4", Batch:"2020-2021"});
db.Student.insert({_id:4, Name: "PQR", Department: "CSE", Sem:7, USN:"1BM17CS003", Year:"4", Batch:"2020-2021"});

db.createCollection("Faculty")
db.Faculty.insert({_id:1, Name: "ABC", Department: "CSE", Subject: "BDA", Faculty_ID:"001", Designation:"Professor"});
db.Faculty.insert({_id:2, Name: "LMN", Department: "CSE", Subject: "DSR", Faculty_ID:"002", Designation:"Professor"});
db.Faculty.insert({_id:3, Name: "PQR", Department: "CSE", Subject: "NMT", Faculty_ID:"003", Designation:"Professor"});
db.Faculty.insert({_id:4, Name: "XYZ", Department: "CSE", Subject: "PSQ", Faculty_ID:"004", Designation:"Professor"});

db.createCollection("COE")
db.COE.insert({_id:1, StudName: "ABC", USN:"1BM17CS001", Subject:"BDA", CIE:"40", SEE:"80", Grade:"A", Result:"Pass"});
db.COE.insert({_id:2, StudName: "LMN", USN:"1BM17CS002", Subject:"DSR", CIE:"42", SEE:"81", Grade:"A", Result:"Pass"});
db.COE.insert({_id:3, StudName: "PQR", USN:"1BM17CS003", Subject:"NMT", CIE:"41", SEE:"83", Grade:"A", Result:"Pass"});
db.COE.insert({_id:4, StudName: "XYZ", USN:"1BM17CS004", Subject:"PSQ", CIE:"43", SEE:"84", Grade:"A", Result:"Pass"});

db.createCollection("Library")
db.Library.insert({_id:1, Name: "ABC", USN:"1BM17CS001", BookName:"BDA", Book_ID:"0001", IssueDate:"22/9/2020", ReturnDate:"7/10/2020"});
db.Library.insert({_id:2, Name: "XYZ", USN:"1BM17CS002", BookName:"DSR", Book_ID:"0002", IssueDate:"23/9/2020", ReturnDate:"8/10/2020"});
db.Library.insert({_id:3, Name: "LMN", USN:"1BM17CS003", BookName:"PSQ", Book_ID:"0003", IssueDate:"24/9/2020", ReturnDate:"9/10/2020"});
db.Library.insert({_id:4, Name: "PQR", USN:"1BM17CS004", BookName:"BDA", Book_ID:"0004", IssueDate:"25/9/2020", ReturnDate:"10/10/2020"});

db.createCollection("Admission")
db.Admission.insert({_id:1, AdmissionNo:1, Name: "ABC", DateOfAdmission:"22/9/2020", Department: "CSE", FeesPaid: 50000});
db.Admission.insert({_id:2, AdmissionNo:2, Name: "XYZ", DateOfAdmission:"22/9/2020", Department: "CSE", FeesPaid: 50000});
db.Admission.insert({_id:3, AdmissionNo:3, Name: "PQR", DateOfAdmission:"22/9/2020", Department: "CSE", FeesPaid: 50000});
db.Admission.insert({_id:4, AdmissionNo:4, Name: "LMN", DateOfAdmission:"22/9/2020", Department: "CSE", FeesPaid: 50000});

db.createCollection("CollegeFestival")
db.CollegeFestival.insert({_id:1, EventName: "ABC", EventIncharge: "XYZ", Duration:"2hrs", StartTime:"10am", Date:"21/9/2020", Budget:2000});
db.CollegeFestival.insert({_id:2, EventName: "PQR", EventIncharge: "DEF", Duration:"3hrs", StartTime:"9am", Date:"25/9/2020", Budget:5000});
db.CollegeFestival.insert({_id:3, EventName: "LMN", EventIncharge: "GHI", Duration:"4hrs", StartTime:"11am", Date:"27/9/2020", Budget:7000});
db.CollegeFestival.insert({_id:4, EventName: "RST", EventIncharge: "XYZ", Duration:"5hrs", StartTime:"8am", Date:"23/9/2020", Budget:9000});



