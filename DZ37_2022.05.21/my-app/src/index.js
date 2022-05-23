import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Vvserko from "./Routes/Vvserko";
import Repos from "./Routes/Repos";



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="vvserko" element={<Vvserko />} />
        <Route path="repos" element={<Repos />} />        
      </Route>
      <Route path="*" element={<h2>Ресурс не найден</h2>} />

    </Routes>
  </BrowserRouter>
);