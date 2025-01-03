const mongoose = require('mongoose');
const addBaseSchema = require('./baseSchema');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  parentCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null,
  },
});

addBaseSchema(categorySchema);

module.exports = mongoose.model('Category', categorySchema);
