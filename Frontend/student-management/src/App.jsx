import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/auth/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/signup" element={ <Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
