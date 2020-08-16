const express = require('express');
const router = express.Router();
const News = require('./model/news');
const Content = require('./model/content');

router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        const contents = await Content.find();
        var listNewWithContent = [];
        news.forEach(item => {
            listNewWithContent.push({
                title: item,
                contents: contents.filter((content) => {
                    return item._id.equals(content.title_id)
                })
            });
        });
        res.json(listNewWithContent);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
router.post('/', async (req, res) => {
    const news = new News({
        title: req.body.title,
    });
    try {
        const newNews = await news.save();
        res.status(201).json(newNews);

    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});
// Delete user
router.delete('/:id', async (req, res) => {
    try {
        var title_id = req.params.id;
        const events = await Content.
        deleteMany({
            title_id
        }, function (err) {
            if (err) console.log(err);
        });
        console.log(events)
        const newItem = await News.findByIdAndDelete(title_id)
        if (!newItem) res.status(404).send("No item found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})
module.exports = router;