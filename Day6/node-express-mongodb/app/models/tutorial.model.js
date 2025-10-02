const { version } = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true, versionKey: false  }
  );

  schema.method("toJSON", function() {
    const { _id, title, ...object } = this.toObject();
    object.customer_id = _id;
    object.name = title;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
