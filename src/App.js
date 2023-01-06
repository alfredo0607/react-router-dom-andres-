import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import PageOne from "./view/PageOne";
import PageTwo from "./view/PageTwo";
import PageThree from "./view/PageThree";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="grid-container">
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/pagina-2" element={<PageTwo />} />
            <Route path="/pagina-3" element={<PageThree />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
