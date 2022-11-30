import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={ <Home />} />
          <Route path="/series" element={ <Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route element={() => <Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
