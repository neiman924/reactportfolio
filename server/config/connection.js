// const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://googlebooks:googlebooks@cluster0.z6ecx7d.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
module.exports = mongoose.connection;