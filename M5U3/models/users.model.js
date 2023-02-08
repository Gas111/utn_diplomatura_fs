const pool= require("../models/database")
var md5= require("md5")


const getUserByUsernameAndPassword= async(email, password)=>{
    try{
 const query= "select * from users where email= ? and password= ? limit 1"
 const row= await pool.query(query,[email,md5(password)])
 return row[0]

    }catch(error){
        throw(error)

    }

}

module.exports= {getUserByUsernameAndPassword}