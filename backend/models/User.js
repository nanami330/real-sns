const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //絶対必要
        min: 3,
        max: 25,
        unique: true, // 重複しない
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array, //複数のフォロワーを配列で格納
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 70,
    },
    city: {
        type: String,
        max: 50,
    },
},
{ timestamps: true}
);

module.exports = mongoose.model("User", UserSchema); //どのファイルでもアクセスできるように