module.exports = (sequelize, DataType) => {
  const Admin = sequelize.define("admin", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("username allowed only string");
          }
        },
      },
    },
    email: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("email allowed only string");
          }
        },
      },
    },
    phoneNo: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("phoneNo allowed only string");
          }
        },
      },
    },
    role: {
      type: DataType.STRING,
      default: "user(eng.)",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("role allowed only string");
          }
        },
      },
    },
    password: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("password allowed only string");
          }
        },
      },
    },
    showPassword: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("showPassword allowed only string");
          }
        },
      },
    },
  });
  return Admin;
};
