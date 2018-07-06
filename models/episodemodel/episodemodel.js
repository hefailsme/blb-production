var mongoose = require('mongoose')

var Episode = mongoose.Schema({
key: {
    type: Number
},    
number: {
    type: Number
},
band: {
    type: String
},
title: {
    type: String
},
embed: {
    type: String
},
link: {
    type: String
},
description: {
    type: String
}
});

module.exports = mongoose.model("Episode", Episode)
