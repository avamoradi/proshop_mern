import  mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        requiredl: true,
        unique: true
    },
    passwoed : {
        type : String,
        required: true
    },
    isAdmin : {
        type : Boolean,
        required: true,
        default : false
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User