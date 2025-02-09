import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import SmallAnimals from "./pages/SmallAnimals";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <h2 className="text-center">
                Welcome to the Animal Adoption Center
              </h2>
            }
          />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/small-animals" element={<SmallAnimals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
