/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ReactNode } from "react";
import UserContext from "./SideMenu-Context";

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={JSON.stringify({ user, setUser })}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
