module.exports = (sequelize, DataTypes) => {
    const Eventos = sequelize.define('Eventos', {
      sOrigem: DataTypes.STRING,
      sDestino: DataTypes.STRING,
      sValor: DataTypes.STRING,
      iTraidor: DataTypes.INTEGER,
    });
  
    return Eventos;
  }