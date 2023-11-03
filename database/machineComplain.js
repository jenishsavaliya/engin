module.exports = (sequelize, DataType) => {
  const machineComplain = sequelize.define("machineComplain", {
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
            throw new Error("allowed only string");
          }
        },
      },
    },
    equipmentSrNumber: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    equipmentName: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
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
            throw new Error("allowed only string");
          }
        },
      },
    },
    serviceType: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    ServiceDate: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    complaintDate: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
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
            throw new Error("allowed only string");
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
            throw new Error("allowed only string");
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
            throw new Error("allowed only string");
          }
        },
      },
    },
    EngineNumber: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    EngineNumber: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    phoneNo: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    complaint_box: {
      type: DataType.STRING,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
  });
  return machineComplain;
};
