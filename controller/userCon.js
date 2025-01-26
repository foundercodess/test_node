const {validationResult}= require('express-validator');

const bcrypt= require("bcryptjs");

const db= require("../config/dbConfig");

const  register =(req, res)=>{
    const errors = validationResult(req);

    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors:errors.array()});
    // }

    // if (!errors.isEmpty()) {
    //     const formattedErrors = errors.array().reduce((acc, error) => {
    //         acc[error.path] = error.msg;
    //         return acc;
    //     }, {});
    //     return res.status(400).json({ errors: formattedErrors });
    // }
    // next();

    if (!errors.isEmpty()) {
        // const formattedErrors = errors.array().reduce((acc, error) => {
        //     acc[error.path] = error.msg;
        //     return acc;
        // }, {});
        // return res.status(400).json(formattedErrors);
        return res.status(400).send({
            msg: "All fields are required to be filled "
        }).json

    }

    // match that email not alreadt exist in database..
    db.query(
        `SELECT * FROM  userlist WHERE  LOWER(email)= LOWER(${db.escape(
            req.body.email
        )});`,

        (err, result)=>{
            if(result &&result.length){
                return res.status(400).send({
                    msg:"This email already in use!, PLease retry with another email"
                })
            }else{
                db.query(
                    `INSERT INTO userlist (name, email, Age) VALUES("${req.body.name}",${db.escape(
                        req.body.email
                    )}, ${db.escape(req.body.Age)});`,

                    (err, result)=>{
                        if(err){
                            return res.status(400).send({
                                msg:err
                            });
                        }else{
                            return res.status(200).send({
                                msg: "The User Has been registered"
                            })
                        }
                    }
                );
            }
        }
    );
}
module.exports={
    register
}