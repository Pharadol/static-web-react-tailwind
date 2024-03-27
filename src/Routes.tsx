import { Route, Routes } from "react-router-dom";
import FrontLayout from "./components/layouts/FrontLayout";
import Home from "./pages/home/Home";

const AppRoutes = () => {
  return (
    <Routes>
     <Route  element={<FrontLayout />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
