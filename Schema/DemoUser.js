const mongoose = require("mongoose");
const { Schema } = mongoose;

const DemoUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bussinessName: {
    type: String
  },
  number: {
    type: String,
    required: true
  },
  bussinessType: {
    type: String
  },
  requirenments: {
    type: String
  }
});

module.exports = mongoose.model("DemoUser", DemoUserSchema);
