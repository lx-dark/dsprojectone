import express from "express";
import { addPerson, deletePerson, getPeople, updatePerson } from "../controllers/peopleMC.js";

const router = express.Router();
router.get("/", getPeople);
router.post("/", addPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);
export default router;