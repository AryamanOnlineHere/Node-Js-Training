// const mongoose = require("mongoose");

// const Role = mongoose.model(
//   "Role",
//   new mongoose.Schema({
//     name: String
//   })
// );

// module.exports = Role;

const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  name: String
});

const Role = mongoose.models.Role || mongoose.model("Role", RoleSchema);

module.exports = Role;
