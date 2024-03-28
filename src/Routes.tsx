import { Route, Routes } from "react-router-dom";
import FrontLayout from "./components/layouts/FrontLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Project from "./pages/project/Project";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<FrontLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/projects" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
