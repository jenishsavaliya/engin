module.exports = (sequelize, DataType) => {
  const EngCard = sequelize.define("engCard", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    equipmentName: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("equipmentName allowed only string");
          }
        },
      },
    },
    equipmentMaker: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("equipmentMaker allowed only string");
          }
        },
      },
    },
    serialNo: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("serialNo allowed only string");
          }
        },
      },
    },
  });
  return EngCard;
};
