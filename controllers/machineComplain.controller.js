const {
  customer,
  machine,
  machineComplain,
  uploadDoc,
} = require("../database");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

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
                  typeof base64Image.base64 === "string" &&
                  base64Image.base64.match(/^data:image\/[a-z]+;base64,/)
                ) {
                  const imageBuffer = Buffer.from(
                    base64Image.base64.replace(
                      /^data:image\/[a-z]+;base64,/,
                      ""
                    ),
                    "base64"
                  );
                  const fileName = `uploads/${new Date().toISOString()}${
                    base64Image.name
                  }`;
                  const absolutePath = path.join(
                    __dirname.replace("controllers", ""),
                    "uploads"
                  );
                  if (!fs.existsSync(absolutePath)) {
                    fs.mkdirSync(absolutePath, { recursive: true });
                  }
                  const filePath = path.join(
                    absolutePath,
                    fileName.replace("uploads/", "")
                  );

                  fs.writeFileSync(filePath, imageBuffer);

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
  update: async (req, res) => {
    try {
      let { id } = req.params;
      await machineComplain
        .update(req.body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Machine complain detail updated",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "something went wrong",
      });
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
            data: data,
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
