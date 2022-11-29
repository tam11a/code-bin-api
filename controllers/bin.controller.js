const Bin = require("../models").bins;

exports.get = async (req, res, next) => {
  try {
    const { count, rows } = await Bin.findAndCountAll({
      // attributes: ["id", "userName", "createdAt"],
    });
    res.status(200).json({
      success: true,
      data: rows,
      total: count,
    });
    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await Bin.create(
      { ...req.body },
      {
        fields: [
          "fileName",
          "sourceCode",
          "language",
          "description",
          "password",
          "userId",
          "projectId",
        ],
      }
    );

    res.status(201).json({
      success: true,
      message: "Bin created successfully",
      data,
    });
    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
