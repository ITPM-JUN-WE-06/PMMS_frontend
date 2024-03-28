import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    usertype: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    year_sem: {
        type: String,
        required: true,
    },
})

const User = mongoose.models.users || mongoose.model("users",userSchema);


export default User;