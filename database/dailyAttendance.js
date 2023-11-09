module.exports = (sequelize, DataType) => {
  const dailyAttendance = sequelize.define("dailyAttendance", {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
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
    inTime: {
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
    workSite: {
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
    location: {
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
    kmStart: {
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
    kmEnd: {
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
    kmRunning: {
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
    outTime: {
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
    workingStatus: {
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
    status: {
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
    kmstartimage: {
      type: DataType.TEXT("long"),
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    kmendimage: {
      type: DataType.TEXT("long"),
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
  return dailyAttendance;
};
