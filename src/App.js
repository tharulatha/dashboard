import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import User from "./component/User";
import Product from "./component/Product";
import Blog from './component/Blog';
import Login from './component/Login';
import NotFound from './component/NotFound';
import NavBar from "./component/NavBar";

const App = () => {
  return (
    <Box sx={{ display: "flex", margin: 0 }}>
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
        <Box sx={{ marginTop: "100px" }}>
          <Routes>
            <Route element={<Dashboard />} path="/" />
            <Route element={<User />} path="/user" />
            <Route element={<Product />} path="/product" />
            <Route element={<Blog />} path="/blog" />
            <Route element={<Login />} path="/login" />
            <Route element={<NotFound />} path="/notfound" />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
