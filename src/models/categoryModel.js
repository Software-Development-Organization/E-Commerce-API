const mongoose = require('mongoose');
const addBaseSchema = require('./baseSchema');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

addBaseSchema(categorySchema);

module.exports = mongoose.model('Category', categorySchema);
