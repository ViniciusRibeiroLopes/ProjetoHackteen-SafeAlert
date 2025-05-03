const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Contact extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  relacao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Contact',
});

Contact.associate = models => {
    Contact.belongsTo(models.User);
};

module.exports = Contact;
