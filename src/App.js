import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./comps/MainNav";
import Pages from "./comps/Pages";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
