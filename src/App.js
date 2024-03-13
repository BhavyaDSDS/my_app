import logo from "./logo.svg";
import "./App.css";
import MainOnline from "./pages/MainOnline";
import { Icon } from "@iconify/react";
import { Route, Routes } from "react-router";
import Subpage from "./pages/Subpage";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Main</Link>
          </li>
          <li>
            <Link to={"/subpage"}>Sub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainOnline setData={setData} />} />
        <Route path="/subpage" element={<Subpage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
