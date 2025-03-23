"use client";
import { createContext, useContext, useState } from "react";

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  const [traits, setTraits] = useState({ C_R: 0, S_F: 0, V_D: 0, I_E: 0 });

  return (
    <TestContext.Provider value={{ userName, setUserName, traits, setTraits }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => useContext(TestContext);