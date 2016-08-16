'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**
 * User Schema
 */

var saved_items = new Schema({
    address_id: String,
    item_id: String
});

mongoose.model('saved_items', saved_items);
