module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        role: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
