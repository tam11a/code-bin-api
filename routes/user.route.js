const express = require("express");
const router = express.Router();

const { get, create } = require("../controllers/user.controller");

router.route("/").get(get);
router.route("/").post(create);

// Get All API
/**
 * @swagger
 * /api/user:
 *  get:
 *    tags: [Users]
 *    summary: Get All Users
 *    responses:
 *      200:
 *        description: Get successful
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *
 */

// Create API
/**
 * @swagger
 * /api/user:
 *  post:
 *    tags: [Users]
 *    summary: Create New User
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *
 *    responses:
 *      201:
 *        description: Creation successful
 *      400:
 *        description: Bad Request
 *
 */

module.exports = router;
