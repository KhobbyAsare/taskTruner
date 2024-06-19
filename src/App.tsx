import { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { AuthProvider } from "./context-api/AuthContext/auth";
import { BrandProvider } from "./context-api/Brandname-context/brandname";

function App() {
  const brandname: string = "taskTruner";
  const [user, SetUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    SetUser({
      name: "hello",
      email: "one",
      role: "user",
    });

    setIsLoggedIn(true);
  }, []);

  return (
    <BrandProvider value={{ brandname }}>
      <AuthProvider value={{ user, isLoggedIn }}>
        <LandingPage />
      </AuthProvider>
    </BrandProvider>
  );
}

export default App;
