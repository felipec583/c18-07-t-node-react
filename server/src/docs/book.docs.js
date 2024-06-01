/**
 * @openapi
 *  tags:
 *    name: Book
 *    description: API to handle book related operations
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - publishDate
 *         - author
 *         - genres
 *         - title
 *         - image
 *         - description
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         publishDate:
 *           type: string
 *           description: The publish date of the book in YYYY-MM-DD format
 *         author:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the author
 *         genres:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               genre:
 *                 type: string
 *                 description: The genre of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         image:
 *           type: string
 *           description: The image of the book
 *         description:
 *           type: string
 *           description: The description of the book
 *       example:
 *         _id: 664fcf1f0678aaabb7b59ca8
 *         publishDate: 2022-01-01
 *         author: "author"
 *         genres: ["genre"]
 *         title: "title"
 *         image: "http://bookcovers.com/image.jpg"
 *         description: "book description"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the genre
 *         genre:
 *           type: string
 *           description: The name of the genre
 *       example:
 *         id: 1
 *         genre: Fiction
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the author
 *         name:
 *           type: string
 *           description: The name of the author
 *       example:
 *         id: 1
 *         name: John Doe
 */


/**
 * @openapi
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Book]
 *     responses:
 *       "200":
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */