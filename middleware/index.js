const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { admin, customer } = require("../database");

module.exports = {
  protect: async (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      let token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(401).json({
          message: "Token does not exit!",
        });
      }
      const decode = await promisify(jwt.verify)(
        token,
        "3934375C97CEC0E0A7F549004EEBC49CE4B34BFD31A91BBD7ED798FDCBF8D5D0"
      );
      if (!decode) {
        return res.status(401).json({
          message: "Unauthorized! JWT Token expired",
        });
      } else {
        let adminData;
        if (decode.data.email) {
          adminData = await admin.findOne({
            where: { email: decode.data.email },
          });
          decode.data.role = adminData.role;
        } else {
          adminData = await customer.findOne({
            where: { id: decode.data.id },
          });
          decode.data.email = adminData.connectEmail;
          decode.data.role = "customer";
        }
        req.user = decode;
        next();
      }
    } else {
      return res.status(500).json({
        message: "Unautorized",
        data: "token does not exites!",
      });
    }
  },
  role: async (req, res, next) => {
    if (req.user.data.role) {
      next();
    } else {
      return res.status(401).json({
        message: "Only admin can create user",
      });
    }
  },
};
