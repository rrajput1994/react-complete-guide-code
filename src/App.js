import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:productID">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
