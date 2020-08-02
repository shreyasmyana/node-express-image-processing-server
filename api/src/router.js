const Router = require('express').Router
const storage = require('multer').diskStorage({destination:'api/uploads', filename :filename})
const upload = multer({fileFilter:filefilter,storage:storage})
const router = Router()

function filename(request, file, callback){
    callback(null, file.originalname)
}

function filefilter(request, file, callback){
    if(file.mimetype !== 'image/png'){
        Request.fileValidationError = 'Wrong file type';
        callback(null, false ,{Error:'Wrong file type'})
    }
    else{
        callback(null, true)
    }
}

router.post('/upload', upload.single('photo'), (request, response)=>{
    if (Request.fileValidationError){
        response.status(400).json({error:Request.fileValidationError})
    }
    response.status(201).json({success:true})
})

module.exports = router