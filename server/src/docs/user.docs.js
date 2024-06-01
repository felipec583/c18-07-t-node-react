/**
 * @openapi
 *  tags:
 *    name: User
 *    description: API to handle user related operations
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Library:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           _id:
 *             type: string
 *             description: The auto-generated id that references one book in the library
 *           bookId:
 *             type: string
 *             description: The id of the book that was added to the library
 *           title:
 *             type: string
 *             description: The title of the book
 *           publishDate:
 *             type: string
 *             description: The date when the book was published
 *           author:
 *             type: string
 *             description: The author of the book
 *           genres:
 *             type: array
 *             items:
 *               type: string
 *               description: The genre of the book
 *           description:
 *             type: string
 *             description: The description of the book
 *           image:
 *             type: string
 *             description: The image of the book
 *           addedDate:
 *             type: string
 *             description: The date when the book was added to the library
 *           status:
 *             type: string
 *             description: The status of the book
 *   example:
 *       id: 665b31cff22f185ab4195b8b
 *       bookId: 665b31cff22f185ab4195b8b
 *       title: The Great Gatsby
 *       publishDate: 1925-04-10
 *       author: F. Scott Fitzgerald
 *       genres: [Fiction, Tragedy]
 *       description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 *       image: http://localhost:3000/images/665b31cff22f185ab4195b8b.jpg
 *       addedDate: 2021-09-01
 *       status: to-read
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     List:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *             description: The auto-generated id that references one list in the library
 *           creationDate:
 *             type: string
 *             description: The date when the list was created
 *             default: Auto generated date upon its creation
 *             required: true
 *           listname:
 *             type: string
 *             description: The name of the list
 *             required: true
 *           booklist:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 addedDate:
 *                   type: string
 *                   description: The date when the book was added to the list
 *                   default: Auto generated date upon its creation
 *                   required: true
 *                 book:
 *                   $ref: '#/components/schemas/Book'
 *                   description: The book id that references the Book model
 *                   required: true
 *   example:
 *       id: 665b31cff22f185ab4195b8b
 *       creationDate: 2021-09-01
 *       listname: My list
 *       booklist:
 *         id: 665b31cff22f185ab4195b8b
 *         addedDate: 2021-09-01
 *         book: 665b31cff22f185ab4195b8b
 */

/**
 * @openapi
 * paths:
 *   /user/library/{id}:
 *     get:
 *       summary: Get user library
 *       tags: [User]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         200:
 *           description: The user library
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Library'
 *         404:
 *           description: User not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: Este usuario no existe
 */

/**
 * @openapi
 * paths:
 *   /user/library:
 *     post:
 *       summary: Add book to user library
 *       security:
 *         - bearerAuth: []
 *       tags: [User]
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 book_id:
 *                   type: string
 *                   example: 665b31cff22f185ab4195b8b
 *       responses:
 *         200:
 *           description: New book added
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   nuevo libro:
 *                     type: string
 *                     example: Nombre del libro
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Este libro ya existe en la biblioteca
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: unauthorized
 * */

/**
 * @openapi
 * paths:
 *   /user/library/book:
 *     put:
 *       summary: Update user library
 *       security:
 *         - bearerAuth: []
 *       tags: [User]
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 book_id:
 *                   type: string
 *                   example: 665b31cff22f185ab4195b8b
 *                 status:
 *                   type: string
 *                   example: read or reading
 *       responses:
 *         200:
 *           description: Book updated
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   updatedStatus:
 *                     type: string
 *                     example: read
 *         401:
 *           description: Unauthorized when jwt is not valid
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: unauthorized
 */

/**
 * @openapi
 * paths:
 *   /user/library:
 *     delete:
 *       summary: Delete book from user library
 *       security:
 *         - bearerAuth: []
 *       tags: [User]
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 book_id:
 *                   type: string
 *                   example: 665b31cff22f185ab4195b8b
 *       responses:
 *         200:
 *           description: Book deleted
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Nombre del libro
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: unauthorized
 *         404:
 *           description: Book not found
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: Este libro no existe en la biblioteca
 *                   details:
 *                     type: object
 *                     properties:
 *                       success:
 *                         type: boolean
 *                         example: false
 */
