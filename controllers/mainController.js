const projectDB = require(`../models/projectDB`);


module.exports = {
  index(req, res, next){
    projectDB.getAll()
    .then(res => {
      res.json({
        message: "ok",
        data: res
      })
      //next();
    })
    .catch(err => {
      console.log(`You got an error in the controller ----> `, err);
      //next(err)
    })
  }
}
