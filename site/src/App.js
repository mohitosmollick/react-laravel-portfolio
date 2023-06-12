import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryWebPage from "./components/pages/CategoryWebPage";
import ClientPage from "./components/pages/ClientPage";
import EditClientInfo from "./components/pages/EditClientInfo";
import ForgetPassword from "./components/pages/ForgetPassword";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login";
import PortfolioPage from "./components/pages/PortfolioPage";
import Register from "./components/pages/Register";

const App = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //       console.log(menuRef.current);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });
  return (
    <BrowserRouter>
      <Layout open={open} setOpen={setOpen} ref={menuRef}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="clientinfo" element={<EditClientInfo />} />
          <Route path="forgetpass" element={<ForgetPassword />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="post/:id" element={<CategoryWebPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
