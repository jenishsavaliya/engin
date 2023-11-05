const {
  customer,
  machine,
  machineComplain,
  uploadDoc,
} = require("../database");
const fs = require("fs");
const multer = require("multer");

module.exports = {
  create: async (req, res) => {
    try {
      await machineComplain
        .create(req.body)
        .then(async (data) => {
          const images = req.body.images;

          if (images && Array.isArray(images)) {
            const uploadPromises = images.map(async (base64Image, index) => {
              try {
                if (
                  typeof base64Image === "string" &&
                  base64Image.match(/^data:image\/[a-z]+;base64,/)
                ) {
                  // Decode and save the base64 image
                  const imageBuffer = Buffer.from(
                    base64Image.replace(/^data:image\/[a-z]+;base64,/, ""),
                    "base64"
                  );
                  const fileName = `image_${index + 1}.jpg`; // You can generate unique file names
                  const filePath = path.join(
                    __dirname.replace("/uploads", ""),
                    fileName
                  );
                  fs.writeFileSync(filePath, imageBuffer);

                  // Create a record in the database
                  await uploadDoc.create({
                    name: fileName,
                    path: filePath,
                    machineComplainId: data.dataValues.id,
                  });
                } else {
                  return "Invalid base64 image data";
                }
              } catch (err) {
                return err.message;
              }
            });

            Promise.all(uploadPromises)
              .then((results) => {
                const successUploads = results.filter(
                  (result) => typeof result !== "string"
                );
                const failedUploads = results.filter(
                  (result) => typeof result === "string"
                );

                res.status(200).json({
                  status: 200,
                  message: "Images uploaded",
                  successfulUploads: successUploads,
                  failedUploads: failedUploads,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  status: 500,
                  message: err.message,
                });
              });
          } else {
            res.status(200).json({
              status: 200,
              message: "No images provided",
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "Something went wrong",
      });
    }
  },
  get: async (req, res) => {
    try {
      await machineComplain
        .findAll({ include: [customer, machine, uploadDoc] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine compalain data founded",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  getComplainByCustomer: async (req, res) => {
    try {
      let { id } = req.params;
      await machineComplain
        .findAll({
          where: { customerId: id },
          include: [customer, machine, uploadDoc],
        })
        .then((data) => {
          res.json({
            status: 200,
            data: data[0],
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  delete: async (req, res) => {
    try {
      await machineComplain
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Machine Complain deleted",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  deleteDoc: async (req, res) => {
    try {
      const data = await uploadDoc.findOne({
        where: { id: req.params.id },
      });
      await uploadDoc
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          if (data) {
            fs.stat(data.path, (err, stats) => {
              if (err) {
                console.log("err----->", err);
                res.json({
                  status: 200,
                  message: "Machine Complain deleted",
                });
              } else {
                fs.unlink(data.path, (deleteErr) => {
                  if (deleteErr) {
                    res.json({
                      status: 500,
                      message: "Something went wrong",
                    });
                  } else {
                    res.json({
                      status: 200,
                      message: "Machine Complain deleted",
                    });
                  }
                });
              }
            });
          } else {
            res.json({
              status: 404,
              message: "Machine record not found",
            });
          }
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};
