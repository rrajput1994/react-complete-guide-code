import { Route } from "react-router";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/products/:productID">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
