import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req: express.Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, 'uploads/')
  },
  filename(req: express.Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb(new Error('Images only!'))
  }
}

const upload = multer({
  storage,
  fileFilter: function (req: express.Request, file: Express.Multer.File, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.single('image'), (file: Express.Multer.File, req: express.Request, res: express.Response) => {
  res.send(`/${file.path}`)
})

export default router
