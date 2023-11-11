// MySQL Tabel - Schema :

module.exports = (sequelize, DataTypes) => {
  const Habib = sequelize.define("Habib", {
    HospitalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ClinicName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PhysicianName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Habib;
};
