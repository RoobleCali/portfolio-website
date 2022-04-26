import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./components/Main";
function App() {
  return (
    <Router>
      <div className="max-w-4xl mx-auto p-2">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
