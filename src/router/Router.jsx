import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Register from "../views/Register";
import Login from "../views/Login";
import NonFound from "../views/NonFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NonFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
