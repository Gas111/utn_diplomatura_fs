const pool= require("../models/database")
var md5= require("md5")


const getArticles= async()=>{
    try{
 const query= "select * from articles order by id desc"
 const row= await pool.query(query)
 return row

    }catch(error){
        throw(error)

    }

}

module.exports= {getArticles}