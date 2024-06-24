import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrandProvider } from "./context-api/Brandname-context/brandname";

function App() {
  const brandname: string = "taskTruner";

  return (
   
      <BrandProvider value={{ brandname }}>
        <LandingPage />
      </BrandProvider>
  
  );
}

export default App;
