const express = require("express");

const {connectToDb, getDb} = require ('./db');

const app = express()


connectToDb((err)=>{
  if (!err){
    app.listen(5000, () => {
      console.log("liste port 5000");
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
})


