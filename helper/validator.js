const {check}= require("express-validator");

exports.signUpValidation = [
    check("name", "Name is required").not().isEmpty(),
    check("email","Please enter a valid  mail").not().isEmpty().normalizeEmail({gmail_remove_dots:true}),
    check("Age", "Age is required").isLength({min:1}),
]

