const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    comments: async () => {
      return Comment.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    }
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password,permission });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log('------------------------');

      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    singleUser: async (parent, { email }) => {
      return User.findOne({ email: email });
    },
    addComment: async (parent, { comment,name,email }) => {
        const commentText = await Comment.create({comment,name,email});
        return commentText;
      }
  },
};

module.exports = resolvers;
