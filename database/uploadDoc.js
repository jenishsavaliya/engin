module.exports = (sequelize, DataType) => {
  const uploadDoc = sequelize.define("uploadDoc", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
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
    path: {
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
  });
  return uploadDoc;
};
