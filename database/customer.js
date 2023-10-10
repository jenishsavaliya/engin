module.exports = (sequelize, DataType) => {
  const Customer = sequelize.define("customer", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    companyName: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("companyName allowed only string");
          }
        },
      },
    },
    addressWorking: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("addressWorking allowed only string");
          }
        },
      },
    },
    addressOffice: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("addressOffice allowed only string");
          }
        },
      },
    },
    name: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("name allowed only string");
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
    designation: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("name allowed only string");
          }
        },
      },
    },
    connectEmail: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("connectEmail allowed only string");
          }
        },
      },
    },
    operatorName: {
      type: DataType.STRING,
      default: "user",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("operatorName allowed only string");
          }
        },
      },
    },
    operatorEmail: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("operatorEmail allowed only string");
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
  });
  return Customer;
};
