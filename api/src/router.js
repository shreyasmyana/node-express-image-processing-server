const multer = require('multer')
const Router = require('express').Router
const path = require('path')
const storage = multer.diskStorage({destination:'api/uploads/', filename :filename})
const upload = multer({fileFilter:fileFilter,storage:storage})
const router = Router()

const photoPath = path.resolve(__dirname, '../../client/photo-viewer.html')

function filename(request, file, callback){
    callback(null, file.originalname)
}

function fileFilter(request, file, callback){
    if(file.mimetype !== 'image/png'){
        request.fileValidationError = 'Wrong file type';
        callback(null, false, new Error('Wrong file type'))
    }
    else{
        callback(null, true)
    }
}

router.post('/upload', upload.single('photo'), (request, response)=>{
    if (request.fileValidationError){
        response.status(400).json({error:request.fileValidationError})
    }
    response.status(201).json({success:true})
})

router.get('/photo-viewer',(request, response)=>{
    response.sendFile(photoPath)
} )

module.exports = router