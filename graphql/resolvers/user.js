const { model: UserModel } = require('../../models/User');

module.exports = {
  Query: {
    async getUser(_, {userInput}) {
      return await UserModel.findOne({email: userInput.email});
    },
  },
  Mutation: {
    async signup(_, { signupInput }) {
      let user = new UserModel(signupInput);
      await user.save();
      return user
    },
    async signin(_, { signinInput }, context) {
      let user = await UserModel.findOne({email: signinInput.email, password: signinInput.password})
      return user
    },
  }
}