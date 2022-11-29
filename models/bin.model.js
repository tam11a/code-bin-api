module.exports = (sequelize, Sequelize) => {
  const Bin = sequelize.define("bin", {
    fileName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sourceCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    // project: {
    //   type: Sequelize.STRING,
    // },
    // author: {
    //   type: Sequelize.STRING,
    // },
    password: {
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
 *        - language
 *        - sourceCode
 *     properties:
 *       fileName:
 *         type: string
 *       sourceCode:
 *         type: string
 *       language:
 *         type: string
 *       description:
 *         type: string
 *       projectId:
 *         type: string
 *       userId:
 *         type: string
 *       password:
 *         type: string
 */
