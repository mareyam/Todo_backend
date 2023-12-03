const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
