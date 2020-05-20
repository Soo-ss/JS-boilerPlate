const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// 모델 정의
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
  },
  email: {
    type: String,
    trim: true, // delete blank
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 저장하기 전 함수 (save)
// 그리고 next()를 해서 저장시킨다.
userSchema.pre("save", (next) => {
  var user = this;

  // 비밀번호 바꿀때만 실행한다.
  // 비밀번호 바꿀때 암호화된 평문이 바뀌면 안되기때문에 이렇게 한다.
  if (user.isModified("password")) {
  } else {
    next();
  }
});

// 스키마를 모델로 감싸준다.
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
