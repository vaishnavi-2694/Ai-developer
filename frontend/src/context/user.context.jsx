
// src/context/UserContext.js

import React, { createContext, useContext, useState } from "react";

// Create the Context
export const UserContext = createContext();

// Create a custom hook to use the UserContext

// Create a provider to wrap your app with
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User data (can be null, an object, or an empty string)

  // Set the user after successful login or 

  // Logout the user


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
