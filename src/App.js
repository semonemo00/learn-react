
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  // logic
  // 페이지 3개: Home, About, Contact

  // view
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>      
      </Routes>
    </BrowserRouter>
  )


}

export default App;

