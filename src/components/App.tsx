import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "./master-layout/master-layout";
import Auth from "./auth/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route path="/*" element={<MasterLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
