const { Sequelize } = require("../models");
const ErrorResponse = require("../utils/error.utils");

const Bin = require("../models").bins;

exports.get = async (req, res, next) => {
	try {
		const { count, rows } = await Bin.findAndCountAll({
			attributes: [
				"id",
				"summary",
				"fileName",
				"language",
				[
					Sequelize.fn("char_length", Sequelize.col("password")),
					"passwordLength",
				],
				// "password",
				// "isPrivate",
				"createdAt",
			],
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

exports.getById = async (req, res, next) => {
	const { id } = req.params;
	const { password } = req.query;
	try {
		const data = await Bin.findByPk(id);
		if (data) {
			if (data.password) {
				if (!password)
					return res.status(200).json({
						success: true,
						data: JSON.parse(
							JSON.stringify({
								...data.dataValues,
								password: undefined,
								passwordLength: data.dataValues.password.length,
								isPrivate: true,
								sourceCode: undefined,
							})
						),
					});
				if (password !== data.password)
					return next(new ErrorResponse("Incorrect Pin!", 401));
			}

			res.status(200).json({
				success: true,
				data,
			});
		} else return next(new ErrorResponse("No Bin Found!", 404));
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
					"summary",
					"fileName",
					"sourceCode",
					"language",
					"description",
					"password",
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
