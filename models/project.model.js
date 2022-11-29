module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    projectName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // author: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    password: {
      type: Sequelize.STRING,
    },
  });

  return Project;
};

/**
 * @swagger
 * components:
 *  schemas:
 *   Projects:
 *     type: object
 *     required:
 *        - projectName
 *        - userId
 *     properties:
 *       projectName:
 *         type: string
 *       userId:
 *         type: string
 *       password:
 *         type: string
 */
