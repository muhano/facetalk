const {Post, Profile, Tag, User} = require('../models/index')

class Controller{
    static addPostForm(req, res){
        Tag.findAll()
            .then(data=> {
                res.render('addPostForm', {data})
            })
            .catch(err=> res.send(err))
        
    }
    static addPost(req, res){
        let {title, content, imgUrl, TagId} = req.body
        let newPost = {title, content, imgUrl, TagId}
        console.log(newPost);
        Post.create(newPost)
            .then(data=> {
                res.redirect('/')
            })
            .catch(err=> res.send(err))
    }

    static editPostForm(req, res){
        let tagList;
        Tag.findAll()
        .then(data=> {
            tagList= data
            return Post.findByPk(req.params.postId)
        })
        .then(data=> {
            res.render('editPostForm', {data, tagList})
        })
        .catch(err=> {
            res.send(err)
        })
    }

    static editPost(req, res){
        // console.log(req.params.postId);
        // console.log(req.body);
        let {title, content, imgUrl, TagId} = req.body
        let postContent = {id:req.params.postId, title, content, imgUrl, TagId}
        // console.log(postContent);
        Post.upsert(postContent)
            .then(data=> {
                res.redirect('/')
            })
            .catch(err=> res.send (err))
    }

    static deletePost(req,res){
        // console.log(req.params.postId);
        Post.destroy({
            where: {
                id : req.params.postId
            }
        })
        res.redirect('/')
    }
}

module.exports = Controller