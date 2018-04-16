const projectDB = require(`../models/projectDB`);


module.exports = {
  index(req, res, next){
    console.log('In main Controller trying to get informaton');
    projectDB.getAll()
    .then(result => {
      res.json({
        message: "ok",
        data: result
      })
      //next();
    })
    .catch(err => {
      console.log(`You got an error in the controller ----> `, err);
      //next(err)
    })
  }
}
