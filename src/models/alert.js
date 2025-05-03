const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Alert extends Model {}

Alert.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: false
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Alert',
});

Alert.associate = (models) => {
  Alert.belongsTo(models.Usuario, {
    foreignKey: 'usuarioId',
    as: 'id'
  });
};
module.exports = Alert;
