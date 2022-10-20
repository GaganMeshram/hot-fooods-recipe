import Pages from "./pages/Pages";
import Section from "./components/Section";
import Category from "./components/Category";
import Home from "./pages/Home";

import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
function App() {
  return (
    <>
    
      <div className="container d-flex flex-column align-items-center">
        <BrowserRouter>
          <Section />
          <Category />
          <Search />
          <Pages />
        
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
