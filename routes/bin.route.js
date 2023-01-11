const express = require("express");
const router = express.Router();

const { get, create, getById } = require("../controllers/bin.controller");

router.route("/").get(get);
router.route("/:id").get(getById);
router.route("/").post(create);

// Get All API
/**
 * @swagger
 * /api/bin:
 *  get:
 *    tags: [Bins]
 *    summary: Get All Bins
 *    responses:
 *      200:
 *        description: Get successful
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *
 */

// Get Bin API
/**
 * @swagger
 * /api/bin/{id}:
 *  get:
 *    tags: [Bins]
 *    summary: Get Bin by Id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *      - in: query
 *        name: password
 *        type: string
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
 * /api/bin:
 *  post:
 *    tags: [Bins]
 *    summary: Create New Bin
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Bins'
 *
 *    responses:
 *      201:
 *        description: Creation successful
 *      400:
 *        description: Bad Request
 *
 */

module.exports = router;
