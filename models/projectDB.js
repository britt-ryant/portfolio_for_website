const db = require(`../db/config.js`);


module.exports = {
  getAll(){
    db.any(`SELECT * FROM project_info`)
  }
}
