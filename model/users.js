const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "姓名未填寫"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email未填寫',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, '密碼未填寫'],
        select: false,
      },
      photo: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const User = mongoose.model("user", usersSchema);

module.exports = User;
