import LandingPage from "./Pages/LandingPage/LandingPage";


export const nav: {
  path: string;
  name: string;
  element: JSX.Element;
  isPblic: boolean;
  isPrivate: boolean;
}[] = [
  {
    path: "/",
    name: "LandingPage",
    element: <LandingPage />,
    isPblic: true,
    isPrivate: false,
  },
];