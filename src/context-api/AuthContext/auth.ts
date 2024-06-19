import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: {
    name: "John Doe",
    email: "john@gmail.com",
    role: "admin",
  },
  isLoggedIn: false
});

export const AuthProvider = AuthContext.Provider;

export default function useAuth() {
  return useContext(AuthContext);
}
