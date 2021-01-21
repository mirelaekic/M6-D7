const router = require("express").Router();
/**CREATE MODEL => const Model = require("");*/
const Model = require("../../utils/model/index");
const Categories = new Model(`categories`);

router.get("/", async(req, res, next) => {
    try {
        const resp = await Categories.findOne();
        res.send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const { rows } = await Categories.findById(req.params.id);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post("/", async(req, res, next) => {
    try {
        const resp = await Categories.save(req.body);
        res.send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const resp = await Categories.findByIdAndUpdate(req.params.id,req.body);
        res.send(resp)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete("/:id", async(req, res, next) => {
    try {
        const { rows } = await Categories.findByIdAndDelete(req.params.id);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;