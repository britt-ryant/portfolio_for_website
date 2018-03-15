const db = require(`../db/config.js`);


module.exports = {
  getAll(){
    console.log(`made it to the model`)
    return db.any(`SELECT * FROM project_info`)
  }
}
