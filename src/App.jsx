import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from "./HomePage1";
import PlansPage from "./PlansPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/plans" element={<PlansPage />} />
      </Routes>
    </Router>
  );
}

export default App;