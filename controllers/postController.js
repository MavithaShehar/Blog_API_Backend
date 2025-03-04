const Post = require('../models/Post')

module.exports = {
    
    getById: async (req, res) => {
    
        try {
            const { id } = req.params;
            const post = await Post.findById(id)
            res.status(200).json({
                succeess: true,
                data: post
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    getAll: async (req, res) => {
        
        try {
            const post = await Post.find({})
            res.status(200).json({
                succeess: true,
                data: post
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    
    
    create: async (req, res) => {
        try {
            const post = await Post.create(req.body);
            res.status(201).json({
                succeess: true,
                data: post
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.findByIdAndUpdate(id, req.body);

            if (!post) {                return res.status(404).json({
                    succeess: false,
                    message: 'user not founnd'
                })
            }

            return res.status(200).json(post)

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await Post.findByIdAndDelete(id);

            if (!post) {
                return res.status(404).json({
                    succeess: false,
                    message: `user ${id} not founnd`
                })
            }

            return res.status(200).json(post)

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}