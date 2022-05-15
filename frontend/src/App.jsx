import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./contexts/UserContext";

import Accueil from "./pages/Accueil";
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/page01/:age" element={<Page01 />} />
          <Route path="/page02/:age" element={<Page02 />} />
          <Route path="/page03/:age" element={<Page03 />} />
          <Route path="/page04/:age" element={<Page04 />} />
          <Route path="/page05/:age" element={<Page05 />} />
          <Route path="*" element={<Page06 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
