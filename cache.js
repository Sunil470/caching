const mongoose = require('mongoose')


const cacheSchema = new mongoose.Schema({
    cache: {
        type: String
    }
})



module.exports = mongoose.model('cache', cacheSchema)
