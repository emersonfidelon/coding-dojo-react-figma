import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import NewRequest from "./pages/NewRequest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
