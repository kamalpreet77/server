import { Router } from "express";

const router= Router();
// import conrollers
import * as controller from '../controllers/controller.js';

// questions route api


router.route('/questions')
.get(controller.getQuestions) //get
.post(controller.insertQuestions)//post
.delete(controller.dropQuestions) //delte


router.route('/result')
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)
export default router;