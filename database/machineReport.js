module.exports = (sequelize, DataType) => {
  const machineReport = sequelize.define("machineReport", {
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
    signature: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    customer_feedback: {
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
    diesel_operational_accelerator_braking_system: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_accelerator_braking_system_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_fip_pump: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_fip_pump_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_Fuel_line_air_intake_exhust: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_Fuel_line_air_intake_exhust_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_mast_carriage: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_operational_mast_carriage_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_engine: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_engine_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_transmission: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_transmission_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_hydraulic: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_hydraulic_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_brake: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_brake_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_coolant: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_oil_coolant_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_engine_knoking: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_engine_knoking_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_radiator_oil_cooling: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_radiator_oil_cooling_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_transmission: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_transmission_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_differintal_gear_box: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_differintal_gear_box_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_clutch_linkage_assy: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_clutch_linkage_assy_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_greaing_oiling_at: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_engine_greaing_oiling_at_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_central_side_cylinder: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_central_side_cylinder_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_tilt_steering_cylinder: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_tilt_steering_cylinder_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_strg_unit: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_strg_unit_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_any_leakages: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_hydraulic_any_leakages_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_inst_penal_electrical: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_inst_penal_electrical_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_starter_alternator_battery: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_starter_alternator_battery_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_wiring_harness: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_wiring_harness_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_fuse_box_horns: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_electrical_fuse_box_horns_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_engine_transmission_oil: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_engine_transmission_oil_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_semi_electric_stacker: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_semi_electric_stacker_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fuse_box_horns: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fuse_box_horns_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_battery_sulphatation: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_battery_sulphatation_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    operatorName: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_colling_fan_belt: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_colling_fan_belt_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_wheel_rims_tyres: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_wheel_rims_tyres_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_main_mounting_fastners: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_main_mounting_fastners_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_any_abnormal_sound: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_any_abnormal_sound_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_seat_engine_hood: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_seat_engine_hood_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_hydraulic_attachment: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_hydraulic_attachment_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_hand_pallet_truck: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_hand_pallet_truck_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_manual_stacker: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    diesel_general_manual_stacker_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_accelerator_braking: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_accelerator_braking_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_motors_controller: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_motors_controller_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_contactors_encoders: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_contactors_encoders_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_fnr_switch: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_operation_fnr_switch_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fluid_axle_oil: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fluid_axle_oil_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fluid_hydraulic_oil: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fluid_hydraulic_oil_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fluid_brake_oil: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_fluid_brake_oil_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_front_rear_axle: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_front_rear_axle_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_front_rear_wheel: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_front_rear_wheel_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_differintial_gearbox: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_differintial_gearbox_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_greaing_oiling: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_transmission_greaing_oiling_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_electrical_inst_penal_electrical: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_electrical_inst_penal_electrical_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_electrical_wiring_harness: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_electrical_wiring_harness_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_electrical_potentio_meter_temp: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_electrical_potentio_meter_temp_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_carraige_mast: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_carraige_mast_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_hoist_central: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_hoist_central_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_tilt_steering: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_tilt_steering_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_strg_unit: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_strg_unit_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_any_leakages: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_hydraulic_any_leakages_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_electrolyte_level: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_electrolyte_level_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_electrolyte_level: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_electrolyte_level_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_specific_gravity: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_specific_gravity_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_total_battery: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_total_battery_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_battery_terminals: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_battery_terminals_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_power_cabales: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_power_cabales_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_power_cabales: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_traction_power_cabales_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_canopy_counter_weight: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_canopy_counter_weight_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_canopy_wheels_rim: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_canopy_wheels_rim_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_any_abnormal_sound: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_any_abnormal_sound_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_seat_battery_hood: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_seat_battery_hood_reason: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_all_fastners_connection: {
      type: DataType.TEXT,
      default: "NULL",
      validate: {
        isTypeMAtch(value) {
          if (typeof value !== "string") {
            throw new Error("allowed only string");
          }
        },
      },
    },
    electric_general_all_fastners_connection_reason: {
      type: DataType.TEXT,
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
  return machineReport;
};
