import { Router } from 'express'
import * as restaurantCtrl from "../controllers/restaurant.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/:query',  checkAuth, restaurantCtrl.search )




export {
  router
}