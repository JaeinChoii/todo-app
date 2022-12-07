'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
// sequelize 객체 선언 시 매개변수로 "DB명, 사용자, 비번, 설정" 정보를 받음

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {"sequelize" : sequelize, "Sequelize": Sequelize}

db.Todo = require('./Todo')(sequelize, Sequelize);
// db = {"sequelize" : sequelize, "Sequelize": Sequelize}
// model: models/Todo.js 에서 Todo가 반환하고 있는 model이 db.Todo에 들어감

module.exports = db;
// db 객체를 내보냄
