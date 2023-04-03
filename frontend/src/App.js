import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import About from "./pages/AboutUs";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
