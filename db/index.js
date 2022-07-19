const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:admin@localhost/acme_talent_db')

const Client = conn.define('client',{
  name: {
    type: Sequelize.STRING
  }
})
const Skill = conn.define('skill',{
  name: {
    type: Sequelize.STRING
  }
})

const ClientSkill = conn.define('clientSkill', {
    clientId: {
    type:Sequelize.INTEGER,
    allowNull: false
  },
  skillId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

ClientSkill.belongsTo(Skill)
ClientSkill.belongsTo(Client)

module.exports = {
  conn,
  Client,
  Skill,
  ClientSkill
}