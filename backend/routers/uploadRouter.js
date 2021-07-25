import multer from "multer";
import express from "express";
import { isAuth } from "../utils.js";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  //create a storage for an image
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    // define a file name for an image
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage }); // midalware to connect storage to backend api
uploadRouter.post("/", isAuth, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default uploadRouter;
