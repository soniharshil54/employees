const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EmployeeSchema =new Schema({
    emp_name:{
        type:String,
        required:true
    },
    emp_contact:{
        type:String,
        required:true
    },
    emp_designation:{
        type:String,
        required:true
    },
    emp_department:{
        type:String,
        required:true
    },
    emp_joindate:{
        type:Date,
        default:Date.now()
    },
    emp_gender:{
        type:String,
        required:true
    },
    emp_profile:{
        type:String
       
    },
})

module.exports = Employee = mongoose.model('employee',EmployeeSchema)