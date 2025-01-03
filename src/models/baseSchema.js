const mongoose = require('mongoose');

const baseSchemaFields = {
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  //TODO: add createdBy and updatedBy fields after adding user model
  //createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  //updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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
