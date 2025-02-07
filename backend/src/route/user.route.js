import { Router } from "express"; //class
import { contactMe } from "../controller/user.controller.js";



const router = Router(); //make a object
router.route("/contact").post(contactMe);

export default router

