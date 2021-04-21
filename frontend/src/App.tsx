import ProductList from './components/ProductList';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import appTheme from './styles/AppTheme'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <ProductList />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App;
