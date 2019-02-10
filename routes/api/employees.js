const express = require("express")
const router = express.Router()

const Employee = require("../../models/Employee")



router.get("/",function(req,res){
    Employee.find().then(employees => res.json(employees))
})

router.get("/:id",function(req,res){
    Employee.find().then(employees => res.json(employees))
})

router.post("/",function(req,res){
    const newEmployee = new Employee({
        emp_name : req.body.emp_name,
        emp_contact: req.body.emp_contact,
        emp_designation:req.body.emp_designation,
        emp_department:req.body.emp_department,
        emp_gender:req.body.emp_gender
    })

    newEmployee.save().then(employee => res.json(employee)).catch((err)=>res.json(err))
})


router.delete("/:id",function(req, res){
    Employee.findById(req.params.id).then(employee => employee.remove())
    .then(()=> res.json({success : true}))
    .catch((err) => res.status(404).json({success:false}))
})

module.exports = router