const router = require("express").Router();
/**CREATE MODEL => const Model = require("");*/
const Model = require("../../utils/model");
const Articles = new Model('articles');
const db = require("../../utils/db");

router.get("/", async(req, res, next) => {
    try {
        const resp = await Articles.join("authors","authorId");
        res.send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const { rows } = await Articles.findById(req.params.id);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post("/", async(req, res, next) => {
    try {
        const resp = await Articles.save(req.body);
        res.send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const resp = await Articles.findByIdAndUpdate(req.params.id,req.body);
        res.send(resp)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete("/:id", async(req, res, next) => {
    try {
        const { rows } = await Articles.findByIdAndDelete(req.params.id);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;

/**
 {
    "author_name":"Mirela",
    "author_lastName":"Ekic",
    "author_email":"mirelaekic@strive.school",
    "author_country":"Germany"
}
 */