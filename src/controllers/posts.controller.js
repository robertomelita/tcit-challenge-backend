const { Posts } = require("../models/posts")

const getPosts = async (req, res) =>{
    const posts = await Posts.findAll();
    res.json(posts);
}

const createPost = async (req, res) =>{
    const {name, description} = req.body
    const newPost = await Posts.create({
        name,
        description,
    });
    res.json(newPost);
}

const deletePost = async (req, res) =>{
    const {id} = req.params;
    const post = await Posts.findAll({
        where: {
            id
        }
    });
    const deletedPost = await Posts.destroy({
        where: {
            id
        }
    });
    res.json(post[0]);
}

exports.getPosts = getPosts;
exports.createPost = createPost;
exports.deletePost = deletePost;