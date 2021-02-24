var orm = require('../config/orm.js');


const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.create('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
    delete(condition, cb) {
      orm.delete('burgers', condition, (res) => cb(res));
    },
  };



module.exports = burger;