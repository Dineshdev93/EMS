
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
module.exports = upload