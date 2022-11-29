const User = require("../models").users;

exports.get = async (req, res, next) => {
  try {
    const { count, rows } = await User.findAndCountAll({
      attributes: ["id", "userName", "createdAt"],
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
    const data = await User.create(
      { ...req.body },
      {
        fields: ["userName", "password"],
      }
    );

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data,
    });
    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
