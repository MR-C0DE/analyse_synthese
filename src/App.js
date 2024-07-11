import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import { Header } from "./components/partials/Header";
import { Content } from "./components/layouts/Content";
import { Footer } from "./components/partials/Footer";

function App() {
  return (
    <BrowserRouter>
     
      <Content />
      
    </BrowserRouter>
  );
}

export default App;
