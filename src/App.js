import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Resource from "./pages/resource/Resource.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/resources" element={<List/>}></Route>
        <Route path="/resources/:id" element={<Resource/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
