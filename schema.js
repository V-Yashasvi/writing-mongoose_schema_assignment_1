const mongoose=require('mongoose')

const ProfileSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        min: 1
    }
})

const UserSchema= new mongoose.Schema({
    username:{ 
        type:String, 
        required:true,
        unique:true
    },
    email:{
        type:String, 
        required:true,
        unique:true
    },
    password:{
        type:String, 
        required:true
    },
    roles:{
        type:[String],
        default:'user'
    },
    profile:{
        type: ProfileSchema,
        required: true
    },
    lastlogin:{
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model('User', UserSchema)