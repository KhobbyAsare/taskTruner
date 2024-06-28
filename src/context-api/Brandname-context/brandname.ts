//brandname.js

import { createContext, useContext } from "react";

export const BrandContext = createContext({
  brandname: "Dexefy",
});

export const BrandProvider = BrandContext.Provider;

export default function useBrand() {
  return useContext(BrandContext);
}
