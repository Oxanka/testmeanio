'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**
 * User Schema
 */

var products = new Schema({
    name: String,
    price: Number
});

mongoose.model('items', products);
