import express from "express";
import { addVideo, deleteVideo, getVideo, random, searchTags, searchTitle, subbed, trending, updateVideo, updateView } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyToken, addVideo)
//Update
router.put("/:id", verifyToken, updateVideo)
//Get
router.get("/find/:id", getVideo)
//Delete
router.delete("/:id", verifyToken, deleteVideo)
//UpdateViews
router.put("/view/:id", updateView)
//trending page
router.get("/trend", trending)
//random page
router.get("/random", random)
//subbed page
router.get("/sub", verifyToken, subbed)
//tags
router.get("/tags", searchTags)
//title
router.get("/search", searchTitle)

export default router;