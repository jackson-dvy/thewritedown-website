import { BrowserRouter, Routes, Route } from "react-router-dom";


import SiteLayout from "./components/layout/SiteLayout";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import IssuePage from "./pages/IssuePage";


export default function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route element={<SiteLayout />}>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/issues/:slug" element={<IssuePage />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );
}
