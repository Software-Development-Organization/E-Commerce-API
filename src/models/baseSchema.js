const mongoose = require('mongoose');

const baseSchemaFields = {
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
};

const addBaseSchema = (schema) => {
  schema.add(baseSchemaFields);

  schema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });

  schema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
  });

  schema.methods.softDelete = function () {
    this.isDeleted = true;
    return this.save();
  };

  // schema.statics.findActive = function () {
  //   return this.find({ isDeleted: false });
  // };
};

module.exports = addBaseSchema;
