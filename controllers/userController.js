const User = require('../models/User')

module.exports = {
    
    getById: async (req, res) => {
    
        try {
            const { id } = req.params;
            const user = await User.findById(id)
            res.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },

    getAll: async (req, res) => {
        
        try {
            const user = await User.find({})
            res.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    
    
    create: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(200).json({
                success: true,
                data: user
            })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id, req.body);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'user not founnd'
                })
            }

            return res.status(200).json(user)

        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: `user ${id} not founnd`
                })
            }

            return res.status(200).json(user)

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

}