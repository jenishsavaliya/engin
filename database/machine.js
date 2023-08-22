module.exports = (sequelize, DataType) => {
  const Machine = sequelize.define("machine", {
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
    equipmentType: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("equipmentType allowed only string");
          }
        },
      },
    },
    capacity: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("capacity allowed only string");
          }
        },
      },
    },
    modelNumber: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("modelNumber allowed only string");
          }
        },
      },
    },
    customerType: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("customerType allowed only string");
          }
        },
      },
    },
    installtionDate: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("installtionDate allowed only string");
          }
        },
      },
    },
    noOfVisits: {
      type: DataType.FLOAT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "number") {
            throw new Error("noOfVisits allowed only number");
          }
        },
      },
    },
    ServiceRepeatDays: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("ServiceRepeatDays allowed only string");
          }
        },
      },
    },
    notifyBefore: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("notifyBefore allowed only string");
          }
        },
      },
    },
    hmr: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("hmr allowed only string");
          }
        },
      },
    },
    equipmentSrNumber: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("serialNumber allowed only string");
          }
        },
      },
    },
    engineName: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("engineName allowed only string");
          }
        },
      },
    },
    EngineNumber: {
      type: DataType.STRING,
      default: "NULL",
      unique: true,
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("EngineNumber allowed only string");
          }
        },
      },
    },
  });
  return Machine;
};
