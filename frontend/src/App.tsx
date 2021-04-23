import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
import Cart from "./components/Cart";
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
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:id" component={ProductView} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
