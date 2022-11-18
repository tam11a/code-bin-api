module.exports = (sequelize, Sequelize) => {
  const Bin = sequelize.define("bin", {
    fileName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fileType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Bin;
};

/**
 * @swagger
 * components:
 *  schemas:
 *   Bins:
 *     type: object
 *     required:
 *        - fileName
 *        - fileType
 *        - code
 *     properties:
 *       fileName:
 *         type: string
 *       code:
 *         type: string
 *       fileType:
 *         type: string
 *       description:
 *         type: string
 */
