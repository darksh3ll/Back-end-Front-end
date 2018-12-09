const express = require('express');
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
});

const upload = multer({
   dest: 'tmp/',
    storage,
    limits:{
       fileSize: 3 * 1024 * 1024 // 3mo maxi
    },
    fileFilter:(req,file,cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
            return cb(new Error("mauvais format de fichier"))
        }
        cb(null,true)
    }

});

router.post('/',upload.array('photos',3), (req, res, next) => {
    console.log(req.files);
    res.end();
});

module.exports = router;

