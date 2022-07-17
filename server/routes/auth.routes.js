const express = require("express")
const { register, login } = require("../controllers/auth.controller")
const validate = require("../utils/validator")
const { registerSchema, loginSchema } = require("../validations/auth.validation")
const router = express.Router()


router.post("/register", validate.body(registerSchema), register)

router.post("/login", validate.body(loginSchema), login)

module.export = router