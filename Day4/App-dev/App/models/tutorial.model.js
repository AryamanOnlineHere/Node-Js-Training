module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: {type:String,required:true,trim:true},
      description: String,
      published: Boolean
    },
    { timestamps: true }
  );
schema.index({title:1},{unique:true,collation:{locale:"en",strength:2}});
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};