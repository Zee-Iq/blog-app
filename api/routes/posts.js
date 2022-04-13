const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Register

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.put ("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) { 
        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set:req.body
            })
            
        } catch (err) {

        }
    } else {
        res.status(401).json("You can update only your post")
    }

    } catch (err) {
        res.status(500).json(err)

    }

});



module.exports = router