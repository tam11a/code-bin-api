const Bin = require("../models").bins;

exports.get = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Executed successfully",
      // data: await Bin.
    });
    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.create = async (req, res, next) => {
  const { fileName, code, fileType, description } = req.body;
  try {
    const data = await Bin.create({ fileName, code, fileType, description });

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
