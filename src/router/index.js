import React from "react";
import { Routes, Route } from "react-router-dom";
import  Cadastro from "../pages/cadastro";
import  Home  from "../pages/home";
import Login from "../pages/login";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastre-se" element={<Cadastro />} />
    </Routes>
  );
};
