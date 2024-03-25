import { Router } from 'express'
import {forgotPassword,generateOtp,changeUserPassword,getCurrentUser,refreshAccessToken,RegisterUser,loginUser,updateUserAvatar, logoutUser} from '../controllers/user.controller.js'
import {verifyJWT} from '../middlewares/auth.middleware.js'
import {upload} from '../middlewares/multer.middleware.js'
const router = Router()
router.route('/register').post(upload.single("avatar"),RegisterUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
router.route('/current-user').get(verifyJWT,getCurrentUser)
router.route('/update-avatar').patch(verifyJWT,upload.single('avatar'),updateUserAvatar)
router.route('/change-password').post(verifyJWT,changeUserPassword)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/generate-otp').post(generateOtp)
router.route('/forgot-password').post(forgotPassword)
export default router;