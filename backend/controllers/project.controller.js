
import userModel from "../models/user.model.js"; // Ensure this is imported

import* as projectService from "../services/project.service.js";
import { validationResult } from "express-validator";



export const createProject = async (req, res) => {
  const errors = validationResult(req); // ✅ Now this will work

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email } = req.body;
    console.log("Received Email:", email); // Debugging

    const loggedInUser = await userModel.findOne({ email });

    if (!loggedInUser) {
      console.log("User Not Found in Database!"); // Debugging
      return res.status(404).json({ message: "User not found" });
    }

    const userId = loggedInUser._id;
    const newProject = await projectService.createProject({ name, userId });
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};
