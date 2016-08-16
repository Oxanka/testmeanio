'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**
 * User Schema
 */

var address = new Schema({
    shop_city: String,
    shop_street: String,
    shop_house_number:String,
    client_city: String,
    client_street: String,
    client_house_number: String,
    price: Number
});

mongoose.model('address', address);
