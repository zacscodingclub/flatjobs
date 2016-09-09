'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  company: {
    type: String,
    default: '',
    trim: true,
    required: 'Company cannot be blank'
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Position title cannot be blank'
  },
  contact_email: {
    type: String,
    default: '',
    trim: true,
    required: 'Contact email cannot be blank'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  requirements: {
    type: String,
    default: '',
    trim: true
  },
  salary: {
    type: Number,
    default: '',
    trim: true
  },
  state: {
    type: String,
    default: ''
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);
