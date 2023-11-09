module.exports = (sequelize, DataType) => {
  const dailyCheckout = sequelize.define("dailyCheckout", {
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
    customer_engine_oil_level: {
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
    customer_transmission_oil_level: {
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
    customer_hydraulic_oil_level: {
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
    customer_brake_oil_level: {
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
    customer_engine_starting_smoothly: {
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
    customer_acceleration_brake_working_smoothly: {
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
    customer_battery_starter: {
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
    customer_front_rear_axle: {
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
    customer_differentia_gear_assembly: {
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
    customer_clutch_linkage_assembly: {
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
    customer_mast_carriage_assembly: {
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
    customer_tilt_cylinder: {
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
    customer_center_cylinder: {
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
    customer_side_cylinder: {
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
    customer_steering_cylinder: {
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
    customer_control_valve: {
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
    customer_steering_assembly: {
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
    customer_hydraulic_tandem_pump: {
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
    customer_wiring_harness: {
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
    customer_instrument_panel_gauges: {
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
    customer_horns_relay: {
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
    customer_fuel_system: {
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
    customer_hydraulic_system: {
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
    customer_canopy_counterweight: {
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
    customer_wheels_rim_tires: {
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
    customer_all_fasteners_connections: {
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
    customer_greasing_oil_points: {
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
    customer_any_leakages: {
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
    customer_any_abnormal_sound: {
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
    customer_external_internal_damages: {
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
    customer_headlight_taillight_indicator_light: {
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
    customer_differential_gear_assembly: {
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
  return dailyCheckout;
};
