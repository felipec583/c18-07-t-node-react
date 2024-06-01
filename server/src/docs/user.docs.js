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
 *           id:
 *             type: string
 *             description: The auto-generated id that references one book in the library
 *           addedDate:
 *             type: string
 *             description: The date when the book was added to the library
 *             default: Auto generated date upon its creation
 *             required: true
 *           status:
 *             type: string
 *             description: The status of the book in the library
 *             default: to-read
 *             required: true
 *           book:
 *             $ref: '#/components/schemas/Book'
 *             description: The book id that references the Book model
 *             required: true
 *   example:
 *       id: 665b31cff22f185ab4195b8b
 *       addedDate: 2021-09-01
 *       status: to-read
 *       book: 665b31cff22f185ab4195b8b
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
