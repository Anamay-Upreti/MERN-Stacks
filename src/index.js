import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Medicine from "./pages/Medicine";
import Doctors from "./pages/Doctors";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Medicine" element={<Medicine />}>
          <Route path="Doctors" element={<Doctors />} />
          <Route path="Stores" element={<Stores />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);