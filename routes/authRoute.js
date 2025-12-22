import express from "express";
import { registerController, loginController, testController, forgotPasswordController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//routing object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//LOGIN || METHOD POST 
router.post('/login', loginController)

//FORGOT PASSWORD
router.post('/forgot-password', forgotPasswordController)

//Test
router.get('/test',requireSignIn,isAdmin,testController)

//protected routes
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok:true});
});

export default router;