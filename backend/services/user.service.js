import userModel from '../models/user.model.js';

export const createUser = async ({ email, password }) => {
  // Check if email and password are provided
  if (!email) {
    throw new Error('Please provide an email address');
  }
  if (!password) {
    throw new Error('Please provide a password');
  }

  // Hash the password
  const hashedPassword = await userModel.hashPassword(password);

  // Create a new user
  const user = await userModel.create({
    email,
    password: hashedPassword,
  });

  // Return the created user
  return user;
};
