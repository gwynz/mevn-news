const express = require('express');
const router = express.Router();
const Content = require('./model/content');

router.get('/', async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async (req, res) => {
    const content = new Content(req.body);
    try {
        const newContent = await content.save();
        res.status(201).json(newContent);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const odcontent = await Content.findByIdAndDelete(req.params.id)

        if (!odcontent) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;