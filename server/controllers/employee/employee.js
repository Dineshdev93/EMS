const empSchema = require("../../Schema/employeeSchema");

// add new employee
exports.addnewEmployee = async(req,res)=>{
  const { filename } = req.file;
  const { name } = req.body;
  const { email } = req.body;
  const { contact } = req.body;
  const { status } = req.body;
  const { dob } = req.body;
  const { jd } = req.body;
  const { home } = req.body;
  const { landmark } = req.body;
  const { district } = req.body;
  const { state } = req.body;
  const { gender } = req.body;

  try {
    const empdata = new empSchema({
      imgpath: filename,
      name: name,
      email: email,
      contact: contact,
      status: status,
      state: state,
      dob: dob,
      jd: jd,
      home: home,
      landmark: landmark,
      district: district,
      gender: gender,
    });
    let finaldata = await empdata.save();
    res.status(201).json({ status: 201, finaldata });
  } catch (error) {
    res.status(401).json({ error });
  }
}

// get employee data
exports.Getemployeedata = async(req,res)=>{
  try {
    let result = await empSchema.find();
    res.status(200).json(result)
  } catch (error) {
     res.status(400).json({error : "Error"})
  }
}

// search by field

exports.Serachbyfield = async(req,res)=>{
  try {
    const users = await empSchema.find({ gender: req.params.field }).exec();

    res.status(200).json(users);
  } catch (err) {
    return res.status(500);
  }
}

// serach by status
exports.SerachbyStatus = async(req,res)=>{
  try {
    const users = await empSchema.find({ status: req.params.field }).exec();

    res.status(200).json(users);
  } catch (err) {
    return res.status(500);
  }
}

// delate employee
exports.deleteemp = async(req,res)=>{
  try {
    const result = await empSchema.deleteOne({_id : req.params.id})
   res.send(result)
   } catch (error) {
      res.sendStatus(`${error}`)
   }
}

// only one employee data get api
exports.getOneempdata = async(req,res)=>{
  let result = await empSchema.findOne({_id : req.params.empid})
  res.send(result)
}

// edit api
exports.editEmployee = async(req,res)=>{
  const data = await empSchema.updateOne({_id : req.params.id},{$set : req.body})
  res.send(data)
}

