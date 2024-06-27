const User = require('../../models/users/auth');
const bcrypt = require('bcrypt');





exports.createUser = async (req, res, next) => {

  const { name, email, password, mobile, address } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send('Email already exists');
    }


    const newUser = new User({ name, email, password, mobile, address });
    await newUser.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('createUser error:', error);
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('getUser error:', error);
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
    const message = req.params.message;
  if (message==="AdminAccess") {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('getUsers error:', error);
    next(error);
  }
};
