const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    
    title: { 
        type: String, 
        required: [true, 'Title is required']
    },
    content: { 
        type: String, 
        required: [true, 'Content is required']
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: [true, 'Author is required']
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Post", PostSchema);