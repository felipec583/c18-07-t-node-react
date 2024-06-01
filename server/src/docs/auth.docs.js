/**
 * @openapi
 *  tags:
 *    name: Authorization
 *    description: API to handle user authorization and authentication
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The user's id
 *         username:
 *           type: string
 *           description: The user's username
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *         description:
 *           type: string
 *           description: The user's description
 *           default: empty string
 *         library:
 *           type: array
 *           $ref: '#/components/schemas/Library'
 *         list:
 *           type: array
 *           $ref: '#/components/schemas/List'
 */
