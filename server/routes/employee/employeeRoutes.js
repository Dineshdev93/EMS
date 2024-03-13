const express = require("express");
const router = express();
const empSchema = require("../../Schema/employeeSchema");
const upload = require("../../multerCongig/employeeStorage");
const employeeController = require("../../controllers/employee/employee");

router.post(
  "/addemployee",
  upload.single("photo"),
  employeeController.addnewEmployee
);

router.get("/getdata", employeeController.Getemployeedata);

router.get("/searchdata/:field", employeeController.Serachbyfield);

router.get("/status/:field", employeeController.SerachbyStatus);

////
// "Delete api"
router.delete("/delete/:id", employeeController.deleteemp);

// only one employee data get api
router.get("/getone/:empid", employeeController.getOneempdata);

// edit api
router.put("/editapi/:id", employeeController.editEmployee);
module.exports = router;
