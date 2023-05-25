const { model, Schema } = require("mongoose");

const accountSchema = new Schema({
  created: Date,
  createdBy: String,
  products: Object,
  owner: Object,
  admins: Array,
});

module.exports = model("Account", accountSchema);
