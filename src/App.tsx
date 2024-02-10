import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Column from "@/pages/column";
import Home from "@/pages/home";
import Record from "@/pages/record";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/record" element={<Record />} />
            <Route path="/column" element={<Column />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
