import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import About from "./pages/AboutUs";
import Login from "./components/VoterLogin";
import Register from "./components/VoterRegistration";
import Voting from "./components/voting";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/voting" exact element={<Voting />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
