const router = require("express").Router();
/**CREATE MODEL => const Model = require("");*/
const Model = require("../../utils/model/index");
const Authors = new Model("authors");

router.get("/", async(req, res, next) => {
    try {
        const resp = await Authors.findOne();
        res.send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const { rows } = await Authors.findById(req.params.id);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post("/", async(req, res, next) => {
    try {
        const resp = await Authors.save(req.body);
        res.send(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const resp = await Authors.findByIdAndUpdate(req.params.id,req.body);
        res.send(resp)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete("/:id", async(req, res, next) => {
    try {
        const { rows } = await Authors.findByIdAndDelete(req.params.id);
        res.send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;