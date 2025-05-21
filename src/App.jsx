//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

//pages
import G_CPF from "./pages/computing-pages/G_CPF.jsx";
import G_CNPJ from "./pages/computing-pages/G_CNPJ.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gerador_de_CPF" element={<G_CPF />} />
          <Route path="/gerador_de_CNPJ" element={<G_CNPJ />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;
