module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    userName: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return User;
};

/**
 * @swagger
 * components:
 *  schemas:
 *   Users:
 *     type: object
 *     required:
 *        - userName
 *        - password
 *     properties:
 *       userName:
 *         type: string
 *       password:
 *         type: string
 */
