const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res){
    const db = req.app.get("db");
    const { email, password, name } = req.body;
    console.log(req.body)
    const user = await db.find_email(email);
    if (user[0]) 

        return res.status(200).send({ message: "Email in use" });
    
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password,salt)
    const newUser = await db.add_user({name,email})
     db.add_hash({gamer_id: newUser[0].gamer_id,hash}).catch(err => {
       return  res.sendStatus(503)
     })
    req.session.user = {email,name,gamer_id:newUser[0].gamer_id,isAdmin:false}
    res.status(201).send({
        message:'logged in',
        user:req.session.user,
        loggedIn:true
    })
  }
};
