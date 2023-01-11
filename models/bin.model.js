module.exports = (sequelize, Sequelize) => {
	const Bin = sequelize.define("bin", {
		summary: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		fileName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		sourceCode: {
			type: Sequelize.TEXT("long"),
			allowNull: false,
		},
		language: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		// isPrivate: {
		// 	type: Sequelize.VIRTUAL,
		// 	get() {
		// 		return !!this.password;
		// 	},
		// 	set() {
		// 		throw new Error("Do not try to set the `isPrivate` value!");
		// 	},
		// },
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
 *       summary:
 *         type: string
 *       fileName:
 *         type: string
 *       sourceCode:
 *         type: string
 *       language:
 *         type: string
 *       description:
 *         type: string
 *       password:
 *         type: string
 */
