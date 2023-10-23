const { admin, customer } = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const soltRound = 10;
const SECRET_KEY =
  "3934375C97CEC0E0A7F549004EEBC49CE4B34BFD31A91BBD7ED798FDCBF8D5D0";

module.exports = {
  login: async (req) => {
    let body = req;
    console.log("sasasasas", body);
    try {
      if (body && body.email && body.password && body.role) {
        let existingUser;
        if (body.role === "customer") {
          existingUser = await customer.findOne({
            where: { connectEmail: body.email },
          });
          existingUser.role = "customer";
        } else {
          existingUser = await admin.findOne({
            where: { email: body.email },
          });
        }
        if (existingUser) {
          if (existingUser.role !== body.role) {
            return {
              status: 404,
              message: "Invalid Role",
            };
          }
          let passwordMatch = await new Promise((resolve, reject) => {
            bcrypt.compare(
              body.password,
              existingUser.password,
              function (err, result) {
                resolve(result);
              }
            );
          });
          if (passwordMatch) {
            let u = {
              sub: existingUser.first_name,
              data: {
                id: existingUser.id,
                email: existingUser.email,
              },
            };
            let token = jwt.sign(u, SECRET_KEY, {
              expiresIn: 1 * 24 * 60 * 60 * 1000,
            });
            delete existingUser["password"];
            return {
              data: {
                token,
                user: existingUser,
              },
              message: "Login Successfully",
              success: true,
              status: 200,
            };
          } else {
            return {
              status: 404,
              message: "Invalid Password",
            };
          }
        } else {
          return {
            status: 404,
            message: "User Does Not Exist",
          };
        }
      } else {
        return {
          status: 401,
          message: "email, password and role are required",
        };
      }
    } catch (err) {
      console.log("wewewweewe", err);
      res.json({
        status: 500,
        message: err.message,
      });
    }
  },
};
