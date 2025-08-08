import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
