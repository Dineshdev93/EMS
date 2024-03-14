const adminDb = require("../../Schema/adminmodel");
const bcrypt = require('bcryptjs')
exports.register = async (req, res) => {
  const { firstname, email, password, confirmpassword } = req.body;

  try {
    if (!firstname || !email || !password || !confirmpassword) {
      res.status(400).json({ error: "All fields required" });
    } else if (password !== confirmpassword) {
      res
        .status(400)
        .json({ error: "password and confirm password are not matched" });
    } else {
      const admindata = new adminDb({
        firstname,
        email,
        password,
      });
      await admindata.save();
      res.status(200).json(admindata);
    }
  } catch (error) {
    res.status(400).json({ error: "error" });
    console.log(error);
  }
};

// admin login api

exports.Login = async(req,res)=>{
   const{email,password} = req.body
   
   const adminvalid = await adminDb.findOne({email : email})
   
    try {
        if(adminvalid){
           const ismatch =await bcrypt.compare(password ,adminvalid.password)
           if(!ismatch){
             res.status(400).json('invalid details')
           }
           else{
              const generatetoken = await adminvalid.genaratetoken()
              const result = {
               adminvalid,generatetoken
              }
              res.status(200).json(result)
           }
        }
        else{
           res.status(400).json({error : "error"})
        }
    } catch (error) {
      res.status(400).json({error : "error"})
      console.log(error);
    }
}
