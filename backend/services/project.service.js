import projectModel from '../models/project.model.js';

export const createProject = async ({ name, userId }) => {
  try {
    if (!name) {
      throw new Error('Name is required');
    }
    if (!userId) {
      throw new Error('User ID is required');
    }

    const project = await projectModel.create({
      name,
      users: [userId] // Ensure this is the correct structure
    });

    return project;
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error code in MongoDB
      console.error('Duplicate project name:', name);
      throw new Error('Project name already exists');
    }
    console.error('Error creating project:', error.message);
    throw new Error(error.message); // Or handle error based on your needs
  }
};