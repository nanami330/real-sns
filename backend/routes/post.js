const router =require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//投稿を作成する
router.post("/", async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);     
    }
});

//投稿を更新する
router.put("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({
                $set: req.body,
            });
            return res.status(200).json("投稿編集に成功しました");
        } else {
            return res.status(403).json("あなたは他の人の投稿を編集できません");
        }    
    } catch (err) {
        return res.status(403).json(err);     
    }
});

//投稿を削除する
router.delete("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("投稿削除に成功しました");
        } else {
            return res.status(403).json("あなたは他の人の投稿を削除できません");
        }    
    } catch (err) {
        return res.status(403).json(err);     
    }
});

//投稿を取得する
router.get("/:id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
            return res.status(200).json(post);   
    } catch (err) {
        return res.status(403).json(err);     
    }
});

//特定の投稿にいいねを押す
router.put("/:id/like", async(req, res) => {
       try {
         const post = await Post.findById(req.params.id);
         if(!post.likes.includes(req.body.userId)){ //まだ投稿にいいねが押されていなければ
            await post.updateOne({
                $push: {   //配列にpushする
                    likes: req.body.userId,
                },
            });
            return res.status(200).json("投稿にいいねを押しました");
         } 
         //投稿にすでにいいねが押されていたら
         else {
            //いいねしているユーザーIDを取り除く
            await post.updateOne({
                $pull: {
                    likes: req.body.userId,
                }
            });
             return res.status(200).json("投稿にいいねを外しました");
         }
       } catch (err) {
        return res.status(500).json(err);
       }
});

//プロフィール専用のタイムラインの投稿を取得
router.get("/profile/:username", async(req, res) => {
    try {
        const user = await User.findOne({username :req.params.username});
        const posts = await Post.find({userId: user._id});
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//タイムラインの投稿を取得
router.get("/timeline/:userId", async(req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        //自分がフォローしている友達の投稿内容を全て取得する。
        const friendPosts = await Promise.all( //非同期処理の値の時はPromise.all
            currentUser.followings.map((friendId) => { 
                return Post.find({userId: friendId });
            })
        );
        return res.status(200).json(userPosts.concat(...friendPosts)); //自分の投稿とフレンドの投稿を組み合わせる
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;