/* Create Articles, Categories, Authors, table and CRUD routes */
/* Setting the routes together and exporting */

const router = require("express").Router();
const articlesRouter = require("./articles");
const authorsRouter = require("./authors");
const categoriesRouter = require("./categories");

router.use("/articles", articlesRouter);
router.use("/authors", authorsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;