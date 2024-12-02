import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;