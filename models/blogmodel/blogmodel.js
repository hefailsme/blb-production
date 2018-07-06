var mongoose = require('mongoose')

var Blog = mongoose.Schema({
key: {
    type: Number
},
number: {
    type: Number
},
date: {
    type: Date
},
embed: {
    type: String
},
link: {
    type: String
},
title: {
    type: String
},
description: {
    type: String
}
});

module.exports = mongoose.model("Blog", Blog)