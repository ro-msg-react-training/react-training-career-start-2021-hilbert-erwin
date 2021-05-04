import ProductListSmart from "./components/ProductList/ProductListSmart";
import ProductViewSmart from "./components/ProductView/ProductViewSmart";
import ProductUpdateSmart from "./components/ProductUpdate/ProductUpdateSmart";
import PageNotFound from "./components/PageNotFound";
import CartSmart from "./components/Cart/CartSmart";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core/";
import appTheme from "./styles/AppTheme";
import { useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  let history = useHistory();
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <Button
          variant="outlined"
          style={{ margin: "20px" }}
          color="primary"
          onClick={() => {
            history.push("/products");
          }}
        >
          Home
        </Button>
        <Switch>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
          <Route exact path="/products" component={ProductListSmart} />
          <Route exact path="/products/add" component={ProductUpdateSmart} />
          <Route exact path="/products/:id" component={ProductViewSmart} />
          <Route
            exact
            path="/products/:id/update"
            component={ProductUpdateSmart}
          />
          <Route path="/cart" component={CartSmart} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
