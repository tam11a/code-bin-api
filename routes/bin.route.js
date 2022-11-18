const express = require("express");
const router = express.Router();

const { get, create } = require("../controllers/bin.controller");

router.route("/").get(get);
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
