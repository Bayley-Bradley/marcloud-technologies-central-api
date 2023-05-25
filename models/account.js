const { model, Schema } = require("mongoose");

const accountSchema = new Schema({
  created: String,
  createdBy: String,
  products: Object,
  owner: Object,
  admins: Array,
});

module.exports = model("Account", accountSchema);
