import { Route } from "react-router-dom";
import "antd/dist/antd.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { ChakraProvider } from "@chakra-ui/react";

import { Login } from "./components/login";
import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { ProductDetail } from "./components/productDetails";
import { NewProduct } from "./components/products/createProduct";
import { CreateCategories } from "./components/products/createCategories";

function App() {
  return (
    <ChakraProvider>
      <Route path="/" render={() => <NavBar />} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/detalle/:id" render={() => <ProductDetail />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/nuevoproducto" render={() => <NewProduct />} />
      <Route
        exact
        path="/nuevascategorias/:catg"
        render={() => <CreateCategories />}
      />
    </ChakraProvider>
  );
}

export default App;
