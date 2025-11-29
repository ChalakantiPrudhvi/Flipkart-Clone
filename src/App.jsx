
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import SectionB from "./components/SectionB";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Productpage from "./components/Productpage";
import CartPage from "./components/CartPage";
function App() {
  return (
    <>
      <BrowserRouter basename="/Flipkart-Clone">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Section />
                <SectionB />
                <Footer />
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Mobile" element={<Productpage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
