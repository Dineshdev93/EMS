const express = require("express");
const router = express();
const empSchema = require("../Schema/employeeSchema");
const multer = require("multer");

const imgconfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, `image-${file.originalname}`);
  },
});

const upload = multer({
  storage: imgconfig,
});

router.post("/postdata", upload.single("photo"), async (req, res) => {
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
});

router.get("/getdata", async (req, res) => {
  let result = await empSchema.find();
  res.send(result);
});
//  router.get('/searchdata/:gender',async(req,res)=>{
//   let result =await empSchema.find({
//       "$or" : [
//          {"gender" : {$regex:req.params.gender}},
//          {"gender" : {$regex:req.params.gender}},

//       ]
//   })
//   res.send(result)
// })

router.get("/searchdata/:field", async (req, res) => {
  try {
    const users = await empSchema.find({ gender: req.params.field }).exec();

    res.status(200).json(users);
  } catch (err) {
    return res.status(500);
  }
});
router.get("/status/:field", async (req, res) => {
  try {
    const users = await empSchema.find({ status: req.params.field }).exec();

    res.status(200).json(users);
  } catch (err) {
    return res.status(500);
  }
});

//// 
// "Delete api"
router.delete('/delete/:id',async(req,res)=>{
   try {
    const result = await empSchema.deleteOne({_id : req.params.id})
   res.send(result)
   } catch (error) {
      res.sendStatus(`${error}`)
   }
})
// only one employee data get api
router.get('/getone/:empid',async(req,res)=>{
    let result = await empSchema.findOne({_id : req.params.empid})
    res.send(result)
})

// edit api
router.put('/editapi/:id',async(req,res)=>{
   const data = await empSchema.updateOne({_id : req.params.id},{$set : req.body})
   res.send(data)
})
module.exports = router;
