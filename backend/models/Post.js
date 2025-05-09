const mongoose =require("mongoose");

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        max: 200,
    },
    img: {
        type: String,
    },
    likes: { //だれがいいねしたのか
        type: Array,
        default: [],
    },
},
{ timestamps: true } //登校した日時を取得
);

module.exports = mongoose.model("Post", PostSchema); //他のファイルでも使えるように