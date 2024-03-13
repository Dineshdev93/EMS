const adminDb = require('../../Schema/adminmodel')

exports.register = async(req,res)=>{
    const{firstname,email,password,confirmpassword} = req.body;

    try {
       if(!firstname || ! email || ! password || !confirmpassword ){
           res.status(400).json({error : 'All fields required'})
       }
       else if(password !== confirmpassword){
          res.status(400).json({error : 'password and confirm password are not matched'})
       }
       else{
         const admindata = new adminDb({
           firstname,email,password
         })
         await admindata.save()
         res.status(200).json(admindata)
       }
    } catch (error) {
       res.status(400).json({error : "error"})
       console.log(error);
    }

}